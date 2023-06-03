---
layout: post
category: linuxmobile
---

When I went through writing cpu throttle code for tegra, msm8916, msm8974, sdm845 etc. I have learned an experience on Android and GNU/Linux

Manufacturer will write additional components to reduce pulses, monitor cpu heat, etc. merge modules into Android. GNU/Linux is the opposite, developers just write the code for the kernel to run, and the optimization is done by the user

You must determine the cpu clock range that the device runs stably with a temperature of 38-43 Celsus degrees, and a pulse to boost the device to run. It's all in /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_frequencies for Android. Or /sys/devices/system/cpu/cpufreq/policy0/scaling_available_frequencies

{% include image.html
            img="images/Python-Automation.jpg"
            title="ARM CPU Temp-Throttle"
            caption="ARM CPU Temp-Throttle" %}

The files to be edited include: scaling_min_freq, scaling_max_freq, cpuinfo_min_freq, cpuinfo_max_freq

Temperature monitoring files in /sys/class/hwmon and /sys/class/thermal
