---
layout: post
category: linuxmobile
---

When Android and ARM were in their infancy, there was still no definition of block compression, decompression according to the block standard to normal, to copy to sdcard. Just use the image extraction tools on your PC to eMMC or sdcard to run Android operating system.

{% include image.html
            img="images/android-arm-arm64-x86-1280x600.png"
            title="Android and ARM"
            caption="Android and ARM" 
            url="https://www.reddit.com/r/postmarketOS/comments/r9cswr/comment/houzp4g/" %}

Later, Google has further developed SE permissive for extra security, compressing img2simg block and decompressing simg2img block, boot partition has slot A and slot B, and from Android 12 onwards, new machines will have more dynamic partition .

Some naive users do not know that when installing a pre-built image on the postmarketOS homepage, they have to unzip the block to extract the image to the sdcard. Because pmOS does not want to change the partition structure on Android from the old to version 13, it is mandatory when installing a new image to format the img2simg block to send sparse to the device.
