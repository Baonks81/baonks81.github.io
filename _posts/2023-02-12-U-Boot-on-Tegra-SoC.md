---
layout: post
category: tegra
---

As mentioned in the previous post, Nexus 7 2012 grouper/tilapia is equipped with ULP Geforce GPU, of PC/Laptop, which is a power-saving SoC series. So the mainline kernel developers have been trying to get linux to run on the 2012 Nexus 7 as a tablet. 
After the entire Nvidia source code for the Tegra SoC and the new GPU was made public by the LapsusS team. 
The developers who have developed the Tegra GPT compression tool are re-crypt, keeping the bootloader intact for the device not to be bricked, 
and there is space on the bootloader partition to install more U-boot for Tegra GPT purposes on Nexus 7 using mainstream Linux, you can compile the new kernel and install it on the device boot partition
