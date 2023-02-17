---
layout: post
category: linuxmobile
---

First of all, GNU/Linux running mainline kernel has 2 main parts: kernel and rootfs.

mainline kernel has /boot, /module, /firmware vendor etc.

{% include image.html
            img="images/AutomatedPhoneTesting.jpeg"
            title="Automated Phone Testing"
            caption="Automated Phone Testing" 
            url="https://blog.brixit.nl/automated-phone-testing-pt-4/" %}

rootfs has x11 components, wayland, shell and software etc. We can update and upgrade.

Every time a new kernel is compiled, the kernel developer has to reinstall the whole system, which is very time consuming. Since rootfs and vendor firmware are infrequently changed and are less dependent on new kernels, the goal is to reuse rootfs and only change /boot in the boot partition and /module in the rootfs. [Martijn Braam's blog] writes about setting up your own hardware and writing code to handle the new kernel change.

Automated Phone Testing

- [Part 1]
- [Part 2]
- [Part 3]
- [Part 4]
- [Part 5]

Tracking from part 1 to part 3 is the test of hardware functions, part 4 is an extension to change the new kernel by connecting to the postmarketOS server containing images for the device included in the community support, to run the kernel. just built under APKBUILD on gitlab of postmarketos/pmaports.

This is also a way to change and test the new kernel on Nexus 7 2012 grouper rev. E1565 runs ubuntu MATE or ArchLinux, openSUSE, although the change is manual. Now it is possible to write code that describes how to do it automatically.

{% include youtube.html id='igH0r4iQ3w4' %}

[Martijn Braam's blog]: https://blog.brixit.nl/
[Part 1]: https://blog.brixit.nl/automated-phone-testing-pt-1/
[Part 2]: https://blog.brixit.nl/automated-phone-testing-pt-2/
[Part 3]: https://blog.brixit.nl/automated-phone-testing-pt-3/
[Part 4]: https://blog.brixit.nl/automated-phone-testing-pt-4/
[Part 5]: https://blog.brixit.nl/automated-phone-testing-pt-5/
