---
layout: post
category: lk2nd
---

When I learned about mainline kernel running on mobile chipsets, I used tegra on grate-driver. Previously tegra on nexus 7 2012 grouper in kernel 3.1.10 (downstream) had Dualboot Android and GNU/Linux via MultiROM, basically patching kexec to kernel 3.1.10 to boot another kernel, so Ubuntu on Nexus 7 2012 and it's using kernel 3.1.10-8-28 again.

{% include image.html
            img="images/qualcomm-snapdragon-410-msm8916.jpg"
            title="Lk2nd on msm8916" 
            caption="Lk2nd on msm8916"
            url="https://github.com/msm8916-mainline/lk2nd" %}

After reading the documentation on how to create initramfs on msm8916, I saw kexec again, proving that lk2nd not only brings back fastboot for Android devices that can boot GNU/Linux, but also switches to booting a new kernel. On msm8916 it is somewhat more difficult than tegra but core devs can still do it even though secureboot still works.

{% include image.html
            img="images/ubuntu-samsung-gt58-msm8916.jpg"
            title="Ubuntu on Samsung Galaxy Tab A 8.0 LTE" 
            caption="Ubuntu on Samsung Galaxy Tab A 8.0 LTE"
            url="https://github.com/msm8916-mainline/lk2nd" %}

Dualboot operation:

1. Insert the Micro SDcard into the device, go to TWRP. Select Install → Install image (click the Install zip button, below the right corner, to switch to), navigate to /sdcard/TWRP, select lk2nd-msm8916.img and select Boot, to flash lk2nd, the purpose is for Android to boot.img will load lk2nd first, find /boot partition of postmarketOS root filesystem (pmOS_boot) to boot GNU/Linux boot.img (similar to kexec Android kernel of MultiROM). Then go to Mount, uncheck System, Data, Cache, etc., leaving only Micro SDcard. Restarting the device will boot into postmarketOS on the Micro SDcard.

2. Go back to Android, go to TWRP. Select Install → Install image (click the Install zip button, bottom right corner, to change to), navigate to /sdcard/TWRP, select Android boot.img (Get from AP_Stock_Samsung_Firmware.tar.md5) and select Boot, to flash again stock Android kernel, Android will now receive normal System, Data, Cache, Micro SDcard and boot into Android on the device.

3. Go back to postmarketOS, perform steps 1, return to Android and perform step 2.


{% include youtube.html id='FwSHqQsFxLU?si=UH4KeYmhgvmj6Hr1' %}

Reference links: 

[Project-DragonPi/DragonRoot]

[Use PostmarketOS Community pre-built image on your device]

[Project-DragonPi/DragonRoot]: https://github.com/Project-DragonPi/DragonRoot/blob/main/Makefile
[Use PostmarketOS Community pre-built image on your device]: https://wiki.postmarketos.org/wiki/Use_PostmarketOS_Community_pre-built_image_on_your_device#insert_a_MicroSDcard_into_your_Computer
