---
layout: post
category: tegra
---

As mentioned in the previous post, Nexus 7 2012 grouper/tilapia is equipped with ULP Geforce GPU, of PC/Laptop, which is a power-saving SoC series. So the mainline kernel developers have been trying to get linux to run on the 2012 Nexus 7 as a tablet. 
After the entire Nvidia source code for the Tegra SoC and the new GPU was made public by the LapsusS team. 
The developers who have developed the Tegra GPT compression tool is [re-crypt], keeping the bootloader intact for the device not to be bricked, 
and there is space on the bootloader partition to install more U-boot for Tegra GPT purposes on Nexus 7 using mainstream Linux, you can compile the new kernel and install it on the device boot partition

{% include image.html
            img="images/1280px-U-Boot_Logo.svg.png"
            title="U-boot on Tegra devices"
            caption="U-boot on Tegra devices" 
            url="https://github.com/clamor-s/u-boot" %}

The first thing to do is to find the bct.bin and sbk of each Nexus 7 2012 using the reference tools below.

- [tegra debrick]
- [Unbrick Nexus 7 with another Tegra 3 Device]
- [How to unbrick Nexus 7 without blob.bin]

To dump bct.bin and sbk of Nexus 7 2012, then enter sbk into $key in grouper's re-crypt script to re-part all Tegra GPT on the device, and use nvflash or fuse_gee to install U-boot into the bootloader
How to build U-Boot on Tegra has no specific instructions, can only refer to build of imx6 or imx7 on [NXP forums]

```
...

# git clone https://github.com/clamor-s/u-boot/

# make grouper_E1564.config ← new version rev.E1565

or:

# make grouper_PM269.config ← old version rev.PM269

# make

...

```

How to check variant rev.E1565 or rev.PM269

Variants

grouper rev. PM269 - without GSM (oldest)

grouper rev. E1565 - without GSM (modern revision)

tilapia rev. E1565 - with GSM

Do I have grouper or tilapia?

```
...

TWRP (adb shell) $ grep androidboot.baseband=unknown /proc/cmdline && echo grouper || echo tilapia

Which hardware revision of grouper do I have?

TWRP (adb shell) $ find /sys/devices/ | grep -c max776 && echo You have E1565

TWRP (adb shell) $ find /sys/devices/ | grep -c tps6591 && echo You have PM269

...

```

[re-crypt]: https://github.com/clamor-s/re-crypt
[tegra debrick]: https://github.com/tofurky/tegra30_debrick
[Unbrick Nexus 7 with another Tegra 3 Device]: https://forum.xda-developers.com/t/unbrick-nexus-7-with-another-tegra-3-device.4078627/
[How to unbrick Nexus 7 without blob.bin]: https://forum.xda-developers.com/t/tutorial-how-to-unbrick-nexus-7-without-blob-bin-requires-another-nexus-7-2012.4083879/
[NXP forums]: https://community.nxp.com/t5/i-MX-Processors-Knowledge-Base/Building-U-boot/ta-p/1127822
