---
layout: post 
category: tegra 
---

This is hard part about Tegra 3 T30L, which I found out, I talked about SoC but everyone around did not understand.
When I used Nexus 7 2012 tablet like my daily driver device. I found it not a tablet, because Nvidia combine ULP Geforce into it, GPU was PC/laptop low voltage version.
Grate driver community support it, run GNU/Linux systemd, AlpineLinux openrc. It could 3d accelarate with drm on Xorg, so I install Ubuntu/ArchLinux ARM, but it's always overheat and auto poweroff.
I used temp-throttle but it still usually poweroff, I researched and I saw temp-throttle not get cpu-thermal sensor right.
I wrote more codes for temp-throttle to go right way. Basically, I touch this folder

/sys/class/thermal/thermal_zone*/type

Those types will changed order on every boot. So I checked all by for..do getting 'cpu-thermal' type
Taking all I/O and sysctl.conf from LineageOS 7.1.2, suck Android Lolipop 5.1.1 stock from Google

{% include image.html
            img="images/Nexus_7_MATE.jpg"
            title="This is Nexus 7 run Ubuntu MATE desktop armv7hf"
            caption="Nexus 7 2012 grouper run Ubuntu MATE desktop armv7hf" 
            url="https://forum.xda-developers.com/t/linux-on-the-nexus-7-2012-wifi-rev-e1565-grouper-2023-edition.4323099/" %}

The tablet run GNU/Linux distros fine now. I'm using to wrote my github.io blog.
DE: i3gaps, MATE
Tools: jekyll, git, vim, nano
