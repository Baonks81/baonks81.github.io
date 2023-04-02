---
layout: post
category: linuxmobile
---

Because when the user buys the devices, in addition to installing the factory firmware, they can also install another system, because the hardware is the user's own, and has full access to it.

When I use a device running Android, iOS, GNU/Linux, Windows, I feel like there is a separate setting for each device. Installing another operating system, I would have to figure out all the settings, tweak on the old system and write more code to support it like running on the new system. For example, a device that is using stock Android, when installing LineageOS or GNU/Linux, must write additional support code. Then I had to search through the manufacturer's firmware to find out the cpu clock, throttling delay, heat limit, etc. Manufacturer's Android has a lot to write extra code for LineageOS or GNU/Linux, it is important that you have the patience to understand and feel it.

{% include image.html
            img="images/Code-Reverse-Engineering-min.png"
            title="Reverse Engine ARM configuration"
            caption="Reverse Engine ARM configuration" 
            url="https://gitlab.com/baonks81/nexus-7-2012-grouper-android-7.1.2-kernel-parameters-and-virtual-memories/-/blob/main/android7.1.2/ktweak" %}

From some work on different devices, I've come up with an almost generic configuration for SoCs including Nvidia's Tegra, Qualcomm's SnapDragon, Samsung's Exynos:

- The legendary of using swap and zram is real

- CPU clock is only about 50% - 66% of max frequency

- zram capacity should be 10% - 20% of RAM capacity

- Swap capacity should be x2 - x4 of zram capacity

- Later devices with a clock speed of over 2Ghz should also be set at 800Mhz - 1Ghz foreach 4 - 8 cores because the temperature limit is about 45-50 degrees Celsius. When it equipped with a cooling fan, the new configuration will be stable.

- Optimizing kernel vm parameters and governor frequency
