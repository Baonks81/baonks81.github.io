---
layout: post
category: linuxmobile
---

When Android and ARM were in early time, there was still no definition of block compression, decompression according to the block standard to normal, to copy to sdcard. Just use the image extraction tools on your PC to eMMC or sdcard to run Android operating system.

{% include image.html
            img="images/android-arm-arm64-x86-1280x600.png"
            title="Android and ARM"
            caption="Android and ARM" 
            url="https://www.reddit.com/r/postmarketOS/comments/r9cswr/comment/houzp4g/" %}

Later, Google has further developed SE permissive for extra security, compressing img2simg block and decompressing simg2img block, boot partition has slot A and slot B from Android 12 and later, new devices will have more dynamic partition, file disk encryption(FDE).

Some naive users do not know that when installing a pre-built image on the postmarketOS homepage, they have to unzip the block extracting the image to the sdcard. Because pmOS does not want to change the partition structure on Android from the old to version 13, it is mandatory when installing a new image to format the img2simg block to send sparse to the device with lk2nd fastboot.

- [The state of mainline on SDM845 devices]
- [Mainlining Nexus 9: First Boot]
- [Mounting Android Retrofit Dynamic Partition images]

[The state of mainline on SDM845 devices]: https://connolly.tech/posts/2021_07_20-sdm845-mainline-5.14/
[Mainlining Nexus 9: First Boot]: https://ansari.sh/posts/mainline-nexus-9-p1/
[Mounting Android Retrofit Dynamic Partition images]: https://blog.z3ntu.xyz/post/2023-03-30-retrofit-dynamic-partition/
