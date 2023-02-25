---
layout: post
category: linuxmobile
---

The reason I write this article because some people asked on matrix how can I use the mainline kernel built on postmarketOS running openrc, which could use on other distros like ArchLinux, Ubuntu, openSUSE, Gentoo running systemd.

{% include image.html
            img="images/systemd-and-cgroups.png"
            title="Systemd Flowchart"
            caption="Systemd Flowchart" 
            url="https://wiki.gentoo.org/wiki/OpenRC_to_systemd_Cheatsheet" %}

I was lucky to be the first to reach the gitlab of [postmarketOS] branch pmaports. At that time, the lines of code in APKBUILD are very simple, you can understand where it is located in the rootfs, and the additional modules such as firmwares and drivers. With the guidance of WorldBlender dev on [xda-developers]. I just figured out hacking the kernel to ports through other distros running systemd.

Some mainline kernels are built specifically for chipsets with or without some modules built into the kernel, but some basic modules such as sound, display panel, sensors are integrated into the kernel as integral components.

To ports from openrc to systemd, one must understand how the kernel boots to add partition mounts to /etc/fstab as required by systemd. Also have to declare loading sound modules and sensors in /etc/modules to tell the kernel to load at booting, install alse-utils and iio-sensors-proxy to use these modules. That's basic configuration and more add-ons.

The GNU/Linux had 3 part:

- [device]-(company name)-(model name)

- [firmware]-(company name)-(model name)

- [linux]-(company name)-(model name)

You should find it out which the right way to ports and patching those on systemd.

[postmarketOS]: https://gitlab.com/postmarketos/pmaports
[xda-developers]: https://forum.xda-developers.com/t/discontinued-linux-on-the-acer-iconia-tab-a500-2022-edition.4136023/post-83103991
[device]: https://gitlab.com/postmarketOS/pmaports/-/tree/master/device/testing/device-asus-grouper
[firmware]: https://gitlab.com/postmarketOS/pmaports/-/tree/master/device/testing/firmware-asus-grouper
[linux]: https://gitlab.com/postmarketOS/pmaports/-/tree/master/device/testing/linux-postmarketos-grate

