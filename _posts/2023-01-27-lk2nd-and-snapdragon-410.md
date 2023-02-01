---
layout: post
category: lk2nd
---

How the system booting!? Let's start, since Google created compatible hardware using the Linux kernel to run Android,
Google has kept fastboot to re-flash the firmware if there are problems, system errors or new updates/upgrades.
When the OEMs edited Android(AOSP), they only keep the Android system, they throw fastboot away and they're changing the firmware with their own softwares.
As Samsung, they're using Kites3 like iTunes to manage their devices, user data, upgrade firmware.
At the same time, Odin is running on Windows which reflash/update firmware.
Xiaomi devices had Mi firmware upgrade, which throughout Mi custom fastboot.
The open-source community has created a tool similar Odin, it's running on GNU/Linux, and it called Heimdall (flashing lk2nd to boot partition).

We had [lk2nd], bring fastboot back, and linux-panel-drivers, it's the dtbs that arise when installing lk2nd, there is the ss_dsi panel line used to display images on the gpu chipset.
Currently only 1 model and variants are supported, need to be added more

Secondary little kernel(lk2nd) → [ initramfs + vmlinuz + config + extra (/pmOS_boot partition) → rootfs + firmware + kernel modules (/pmOS_root include Phosh UI) ]

[lk2nd]: https://github.com/msm8916-mainline/lk2nd
