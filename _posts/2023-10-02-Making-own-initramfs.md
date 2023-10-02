---
layout: post
category: linuxmobile
---

Usually people reading Initramfs or initrd will immediately think it is the root file-sytem. Actually it only runs temporarily after the kernel boots and resets PID 1, initrd does not load external modules, initramfs is a small file-system that allows the kernel to show where to store real root file-system and firmware, the path to ext-modules

Initrd is a ramdisk that supports booting and switching to the real root filesystem. Usually /sbin/initrd

Initramfs is a mini root file-system, so it will be created in the file initramfs.cpio.gz including initramfs.list (used to declare a list of files and directories running in initramfs), later it will also be separated into init_function.sh to save the files. The functions are written in the init file, shortening the init. The initramfs.cpio.gz structure is as follows:

{% include image.html
            img="images/20230509_112432.jpg"
            title="Linux Mobile"
            caption="GNU/Linux Mobile" 
%}

```
...

initramfs/

/                
├─ sys          Used for the sysfs mount.
├─ proc         Used for the procfs mount.
├─ dev          Used for the devtmpfs mount.
├─ run          Sometimes used by programs such as cryptsetup at runtime.
├─ bin          Used for standard binaries.
├─ sbin         Used for privileged binaries.
├─ lib          Used for 32 bit libraries.
├─ lib64        Used for 64 bit libraries.
├─ mnt
│   └─root      Used as a mountpoint for the root filesystem and target for switch_root.
├─ etc          Mostly used for the ''fstab''.
└─ root         Used for the root shell's homedir.

...
```

Every time you add a program to run like busybox or mount, you must add the libraries and place them in the directory as above.

```
...

root # type mount

    /bin/mount

root # lddtree /bin/mount

   /bin/mount (interpreter => /lib64/ld-linux-aarch64.so.1)
    libmount.so.1 => /lib64/libmount.so.1
    libblkid.so.1 => /lib64/libblkid.so.1
    libc.so.6 => /lib64/libc.so.6

root # type busybox

/bin/busybox (interpreter => None)

root # type findfs

    /bin/findfs

root # lddtree /bin/findfs

root # type switch_root

    /sbin/switch_root

root # lddtree /sbin/switch_root

...
```

Copy the libraries libmount.so.1, libblkid.so.1, libc.so.6 to folder /lib64. Do the same for busybox, findfs, switch_root

Write the mount and rescue_shell functions in init_fuction.sh and declare them in init to use the functions. Everything added must be declared in the initramfs.list so the kernel knows and switch_root to real root file-system

```
...

File initramfs/init_function.sh:

rescue_shell () {
    echo "$@"
    echo "Something went wrong. Dropping you to a shell."
    # The symlinks are not required any longer
    # but it helps tab completion
    /bin/busybox --install -s
    exec /bin/sh
}

File initramfs/init:

. /init_function.sh

PATH="/sbin:/bin"
# start for real here
# temporarily mount proc,sys and dev

mount -t proc proc /proc || rescue_shell
mount -t sysfs sysfs /sys || rescue_shell
mount -t devtmpfs devtmpfs /dev || rescue_shell

# mount using findfs
mount -o ro $(findfs LABEL=pmOS_root) /mnt/root/  || rescue_shell
mount -o ro $(findfs LABEL=pmOS_boot) /mnt/root/boot  || rescue_shell

# Clean up
umount /proc
umount /sys
umount /dev

# Boot the real thing
exec switch_root /mnt/root /sbin/init

...
```

Create the initramfs.list file to declare directories and files for the kernel booting to real root file-system

```
...

# directory structure
dir /proc	755 0 0
dir /usr        755 0 0
dir /bin        755 0 0
dir /sys        755 0 0
dir /var        755 0 0
#dir /lib        755 0 0
dir /lib64     755 0 0
dir /sbin       755 0 0
dir /mnt       755 0 0
dir /mnt/root   755 0 0
dir /etc        755 0 0
dir /root      700 0 0
dir /dev       755 0 0

nod /dev/null   666 0 0 c 1 3
nod /dev/tty    666 0 0 c 5 0
nod /dev/console        600 0 0 c 5 1

# busybox
# Output file name              Input file name
file /bin/busybox               /root/initramfs/bins/bin/busybox        755 0 0

# Need real mount as busybox did not support UUID
file /bin/mount                 /root/initramfs/bins/bin/mount          755 0 0

slink /bin/findfs                       /bin/busybox                    777 0 0
slink /sbin/switch_root                 /bin/busybox                    777 0 0
# libraries required by /sbin/fsck.ext4 and /sbin/fsck
# The /lib -> /lib64 symlink is mostly harmless but its not right on arm64
slink   /lib                            /lib64                          777 0 0

# Output file name                      Input file name
file    /lib/ld-linux-aarch64.so.1	    /root/initramfs/bins/lib/ld-linux-aarch64.so.1      755 0 0
file    /lib64/libblkid.so.1            /root/initramfs/bins/lib64/libblkid.so.1            755 0 0
file    /lib64/libc.so.6                /root/initramfs/bins/lib64/libc.so.6                755 0 0
file    /lib64/libmount.so.1            /root/initramfs/bins/lib64/libmount.so.1            755 0 0

file    /init                           /root/initramfs/init               755 0 0

...
```

Or using mainline kernel tools:

```
...

linux/usr/gen_initramfs.sh -h ## để tự phát sinh initramfs.cpio

linux/usr/gen_initramfs.sh -o ../initramfs.cpio /initramfs

...
```

Generate initramfs.list automatically in the linux directory to build mainline kernel

```
...

root # linux/usr/gen_initramfs.sh ../initramfs | tee ../initramfs.list

...
```

Create initramfs.cpio.gz

```
...

root # cd initramfs

root # find . -print0 | cpio --null --create --verbose --format=newc > initramfs.cpio

...
```

The auto-generate initramfs tools from distro: dracut, mkinitcpio, initramfs-tools, postmarketos-mkinitfs


Reference links:

```
...

https://wiki.gentoo.org/wiki/Initramfs

https://wiki.gentoo.org/wiki/Initramfs_-_make_your_own

https://gitlab.com/postmarketOS/pmaports/-/tree/master/main/postmarketos-initramfs?ref_type=heads

https://github.com/Project-DragonPi/DragonRoot

...
```
