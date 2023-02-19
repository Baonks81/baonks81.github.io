---
layout: post
category: linuxmobile
---

If you have armhf or arm64 GNU/Linux available, it's quite easy, if you don't have to install more binfmt and dependent packages.

{% include image.html
            img="images/Debootstrap.jpg"
            title="Debootstrap"
            caption="Debootstrap armhf and arm64" 
            url="https://ubuntu-mate.community/t/bootstrapping-ubuntu-mate-for-an-armhf-base/556" %}

You can use directory to create rootfs and then compress tar.gz or use loop to create image and install rootfs in image. This article shows you how to use loop quickly.

```
...

# sudo apt update

# sudo apt upgrade

# sudo apt install binfmt loop gparted debootstrap

# if dd=/dev/zero of=/path/to/image bs=512 count=1

# sudo modprobe loop

loop0

# sudo losetup -f

# sudo losetup /dev/loop0 /path/to/image

# sudo partprobe /dev/loop0

# sudo garted /dev/loop0

Create pmOS_boot (flags boot) and pmOS_root partition

# sudo mount -t ext2 -o loop /dev/loop0p1 /media/boot

Copy /boot to pmOS_boot

Now we debootstrap rootfs to pmOS_root

# sudo mount -t ext4 -o loop /dev/loop0p2 /media/rootfs

Ubuntu Lunar Lobster and others
# debootstrap lunar /media/rootfs http://ports.ubuntu.com

Debian Bookworm and others
# debootstrap bookworm $D http://ftp.debian.org/debian

After debootstrap, we chroot to update and upgrade

# mount -t proc none $D/proc

# mount -o bind /sys $D/sys

# mount -o bind /dev $D/dev

# mount -o bind /dev/pts $D/dev/pts

# nano $D/etc/apt/sources.list


Ubuntu: with [distro-version] such as: jammy, kinetic, lunar

deb http://ports.ubuntu.com/ubuntu-ports/ [distro-version] main restricted universe multiverse

# deb-src http://ports.ubuntu.com/ubuntu-ports/ [distro-version] main restricted universe multiverse

deb http://ports.ubuntu.com/ubuntu-ports/ [distro-version]-updates main restricted universe multiverse

# deb-src http://ports.ubuntu.com/ubuntu-ports/ [distro-version]-updates main restricted universe multiverse

deb http://ports.ubuntu.com/ubuntu-ports/ [distro-version]-backports main restricted universe multiverse

# deb-src http://ports.ubuntu.com/ubuntu-ports/ [distro-version]-backports main restricted universe multiverse

deb http://ports.ubuntu.com/ubuntu-ports/ [distro-version]-security main restricted universe multiverse

# deb-src http://ports.ubuntu.com/ubuntu-ports/ [distro-version]-security main restricted universe multiverse

Debian:

deb http://deb.debian.org/debian bookworm main contrib non-free

deb http://security.debian.org/debian-security bookworm-security main contrib non-free

deb http://deb.debian.org/debian bookworm-backports main contrib non-free

deb http://deb.debian.org/debian bookworm-updates main contrib non-free

# chroot /media/rootfs

# apt update

# apt upgrade

Ubuntu:

# apt -y install ubuntu-standard initramfs-tools language-pack-en



Debian:

# apt -y install locales initramfs-tools

# tasksel install standard

# tasksel --list-tasks

# dpkg-reconfigure tzdata

# dpkg-reconfigure locales

en_US.UTF-8

# apt install suckless-tools dmenu term lightdm lightdm-settings onboard iwd nano htop neofetch blueman iio-sensors-proxy alsa-utils xfonts-base xfonts-75dpi xfonts-100dpi xfonts-cyrillic

# sudo nano $D/etc/fstab

LABEL=pmOS_root      /               ext4    defaults,noatime            0   0

LABEL=pmOS_boot      /boot           ext2    defaults                            0   1

tmpfs                /tmp            tmpfs   defaults,noatime,mode=1777          0   0

tmpfs                /var/tmp        tmpfs   defaults,noatime,mode=1777          0   0

# tmpfs                /var/spool      tmpfs   defaults,noatime,mode=1777          0   0

tmpfs                /var/log        tmpfs   defaults,noatime,mode=0755          0   0

# nano $D/etc/environment

MOZ_USE_XINPUT2=1

MOZ_X11_EGL=1

Create oem user and password

# useradd -mG sudo <username>

# passwd <username>

New passwd: <password>

# usermod -a -G adm,dialout,cdrom,audio,video,plugdev,dip,root,input <username>

Copy kernel folder to /media/rootfs

# cp -r /etc/* /media/rootfs/etc/

# cp -r /lib/* /media/rootfs/lib/

# cp -r /usr/* /media/rootfs/usr/

# cp -r /var/* /media/rootfs/var/


# umount /media/rootfs/proc

# umount /media/rootfs/sys

# umount /media/rootfs/dev/pts

# umount /media/rootfs/dev/

# umount /media/rootfs/

...

```

We had image including /boot and /rootfs partition now. We can push image to device and fastboot flash boot.img to boot partition. Restart to testing
That's all steps...

The reference link: [Bootstrapping Ubuntu MATE for an armhf base]

[Bootstrapping Ubuntu MATE for an armhf base]: https://ubuntu-mate.community/t/bootstrapping-ubuntu-mate-for-an-armhf-base/556

