--- 
layout: post 
category: tegra 
--- 

Preparing softwares to compile the mainline kernel (grate-kernel). Using git to get the linux kernel source code to your computer

{% include image.html
            img="images/tegra3.jpg"
            title="Grate kernel"
            caption="Grate kernel" 
            url="https://github.com/grate-driver/linux" %}

```
...

$ sudo su
<passwd>
# apt-get install build-essential git fakeroot ncurses-dev xz-utils libssl-dev bc flex libelf-dev bison make crossbuild-essential-armhf gcc-arm-none-eabi gcc-arm-linux-gnueabihf libmpc-dev libgmp-dev mkbootimg
# exit
$ mkdir -p linux

Grate-driver tegra kernel:
$ git clone --depth=1 --branch master https://github.com/grate-driver/linux.git linux

Clamor's transformer kernel:
$ git clone --depth=1 --branch transformer https://github.com/clamor-s/linux.git linux

$ cd linux
$ make clean

...
```

{% include image.html
            img="images/grate-kernel.jpg"
            title="Grate kernel"
            caption="Grate kernel" 
            url="https://github.com/grate-driver/linux" %}

```
...

$ make ARCH=arm CROSS_COMPILE=arm-none-eabi- transformer_defconfig
$ make ARCH=arm CROSS_COMPILE=arm-none-eabi- menuconfig
$ make ARCH=arm CROSS_COMPILE=arm-none-eabi- savedefconfig
$ make clean

Grate-driver tegra kernel:
$ make ARCH=arm CROSS_COMPILE=arm-none-eabi- grate_defconfig pmos.config

Clamor's transformer kernel:
$ make ARCH=arm CROSS_COMPILE=arm-none-eabi- transformer_defconfig

$ make ARCH=arm CROSS_COMPILE=arm-none-eabi- -j $(nproc)

rev.E1565:
$ cat arch/arm/boot/zImage arch/arm/boot/dts/tegra30-asus-nexus7-grouper-E1565.dtb >| zImage-dtb

rev.PM269:
$ cat arch/arm/boot/zImage arch/arm/boot/dts/tegra30-asus-nexus7-grouper-PM269.dtb >| zImage-dtb

The Nexux 7 2012 boot command-line

deviceinfo_flash_offset_base="0x10000000"
deviceinfo_flash_offset_kernel="0x00008000"
deviceinfo_flash_offset_ramdisk="0x01000000"
deviceinfo_flash_offset_second="0x00f00000"
deviceinfo_flash_offset_tags="0x00000100"

$ mkbootimg --kernel zImage-dtb -o boot.img --base 0x10000000 --kernel_offset 0x00008000 --ramdisk_offset 0x01000000 --second_offset 0x00f00000 --tags_offset 0x00000100

$ fastboot devices
$ fastboot boot boot.img

...
```

Note: n7 2012 grouper rev.E1565 when building zImage, boot.img or vmlinuz must have capacity < 3.5MB. When building with pmbootstrap integrated with initramfs, it must be < 6.9MB.
Writing your own [initramfs] to continue booting when the [grate-kernel] has reset PID 1.

[initramfs]: https://baonks81.github.io/Making-own-initramfs/
[grate-kernel]: https://github.com/grate-driver/grate/wiki/Using-the-grate-kernel
