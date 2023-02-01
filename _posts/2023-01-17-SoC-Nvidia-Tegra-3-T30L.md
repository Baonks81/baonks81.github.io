--- 
layout: post 
category: tegra 
--- 

This is the first SoC on ARM. Nvidia made ULP Geforce on it, so 
many things to do when ports mainline on it. I found the connect when 
I used pmOS, people want to accelerate but pmOS devs said "No", it's 
just 2D accelerate, but 3D accelerate on grate-driver launchpad.net. 
And the kernel build on pmOS, not complex, I ports kernel using 
openrc to systemd, adding some fstab command to mount pmOS_boot and 
pmOS_root

{% include image.html
            img="images/Nexus_7.jpeg"
            title="This is Nexus 7 variants"
            caption="Nexus 7 2012 Tablet" 
            url="https://en.wikipedia.org/wiki/Nexus_7_(2012)" %}

So 3D accelerate worked on Nexus 7 2012. If it works on Ubuntu, it will work on Archlinux, Fedora, and openSUSE.

Latest things, I found i3gaps and Mate out, if you build website on grouper, i3gaps will take less RAM to run browser, local web-server, and vim or nano for IDE.
