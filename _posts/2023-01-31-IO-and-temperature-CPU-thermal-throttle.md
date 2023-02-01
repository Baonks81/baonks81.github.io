---
layout: post
category: lk2nd
permalink: /IO-and-temperature-CPU-thermal-throttle/
---

This post, I share my experiences from I/O and CPU temperature, thermal zone, and CPU throttle for system stability, and device's not too hot.
As we knew, Android reach the stable so long, when we ports Android devices to GNU/Linux, we have to get some configures to upstream such as I/O, thermal zone, cpu_governor and scale_frequency_governor.
Rooting devices and using root explorer, some folder to notes

/sys/device/system/cpu/cpu*
/sys/class/thermal/thermal_zone*
/sys/block/*/queue

Getting sysctl.conf from android terminal and busybox apps
The CPU frequency should set at 66% on max frequency

Example: msm8916 ~ 1,2GHz per core.
We used 800MHz ~ 66% on 1,2GHz

If device gets overheat, we have to use temp-throttle on github.com/sepero
