---
layout: post
category: linuxmobile
---

Because Android is a fork of GNU/Linux, that means only the kernel is used, the rest of the rootfs and components are added such as drivers, firmwares, google play and apps. Android need to optimize kernel parameters, even Google engineers did but it's still suck parameters from stock

{% include image.html
            img="images/Ktweak.jpg"
            title="ktweak optimize kernel params"
            caption="Ktweak" 
            url="https://github.com/tytydraco/KTweak" %}

rootfs of GNU/Linux is the same, in addition to the kernel just to boot, when we review rootfs, it is necessary to optimize kernel parameters. Fortunately, it is possible to get the parameter settings on Android to switch to GNU/Linux, let's just call Android using the downstream kernel, and GNU/Linux using the upstream kernel.

When we're writing code and adding custom settings files in the kernel's kconfig, we can compile a file to boot but this file is still unusable, we need dtbo to correctly identify the device to be assembled into the boot, and must have the parameters number that tells the kernel the location of boot in the RAM table using the mkbooting tool.

To get to the rootfs stage, it is necessary to optimize kernel parameters, manage CPU/GPU core clocks and CPU temperature. This is why I learned ktweak on Android, written specifically for Oneplus 6/6T series, so I need to tweak a lot on Nvidia's Tegra SoC and Qualcomm's msm8916. Check out the differences in the links below.

- [tytydraco's ktweak]
- [Nexus 7 Android 7.1.2 ktweak]
- [Nexus 7 GNU/Linux ktweak]
- [msm8916 Qualcomm ktweak]

[tytydraco's ktweak]: https://github.com/tytydraco/KTweak
[Nexus 7 Android 7.1.2 ktweak]: https://gitlab.com/baonks81/nexus-7-2012-grouper-android-7.1.2-kernel-parameters-and-virtual-memories/-/blob/main/android7.1.2/ktweak
[Nexus 7 GNU/Linux ktweak]: https://gitlab.com/baonks81/nexus-7-2012-grouper-ubuntu-mate-lxqt-22.04/-/blob/main/ubuntu%20mate%2022.04/cpufreq.start
[msm8916 Qualcomm ktweak]: https://gitlab.com/baonks81/samsung-galaxy-a5-2015-sm-a500h-a53g/-/tree/main/wt88067/tweaks
