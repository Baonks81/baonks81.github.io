---
layout: post
category: linuxmobile
---

Initially, when I stepped foot in GNU/Linux, I realized that the operating system only writes code to run on specific hardware that has not been optimized, even Android is not yet optimal.

Once I got the rootfs and mainline kernel running on my Nexus 7, I realized something. Most of the original distros like Debian(Ubuntu), ArchLinux, Fedora, OpenSUSE, Gentoo, Slackware, Linux From Scratch(LFS) etc. All boot into correct tty0 to tty9, depending on the distro's settings.

{% include image.html
            img="images/ttyescape.jpg"
            title="TTYEscape"
            caption="TTYEscape, buffyboard and hkdm daemon" 
            url="https://wiki.postmarketos.org/wiki/TTYescape" %}

At that time, I wanted to have a virtual keyboard to input upgrade commands and install more login screens, the GUI had to add a keyboard and mouse for input, the process was too complicated. Since mobile-friendly must be virtualized and hardwares removed, as the mouse will be replaced by touch-screen/touch-gestures, the keyboard must have virtual keys instead.

After that, in the postmarketOS community (AlpineLinux) appeared [fbkeyboard], aiming to bring virtual keyboard to tty, written in C, but the keyboard layout is not friendly, quite similar to the keyboard of SailfishOS. Then [Caleb Connolly] dev, came up with [ttyescape], which combines triggerhappy and fbkeyboard, to launch the virtual keyboard when holding down Power button + 3 times the Volume Down button.

{% include image.html
            img="images/Nexus7_ttyescape.jpg"
            title="Nexus 7 run ttyescape"
            caption="Nexus 7 run ttyescape, buffyboard and hkdm daemon" 
            url="https://gitlab.com/baonks81/nexus-7-run-archlinux-native" %}

Some time later, in the community, there was a hkdm daemon written by [elagost] dev in Rust, along with buffyboard. Now ttyescape combines hkdm and buffyboard again perfectly on GNU/Linux tty. So I took it from the ArchLinux AUR to compile for armhf on systemd, a simple wish now a reality.

See those link below:

- [ArchLinux dreemurrs-embedded]
- [hkdm daemon on postmarketOS Gitlab]
- [ttyescape on postmarketOS Gitlab]
- [buffyboard on ArchLinux AUR]

{% include youtube.html id='mUEoIBS7yKQ' %}

[fbkeyboard]: https://github.com/magmastonealex/fbkeyboard#readme
[Caleb Connolly]: https://connolly.tech/
[ttyescape]: https://wiki.postmarketos.org/wiki/TTYescape
[elagost]: https://www.elagost.com/alarm/
[ArchLinux dreemurrs-embedded]: https://github.com/dreemurrs-embedded/Pine64-Arch/pull/268
[hkdm daemon on postmarketOS Gitlab]: https://gitlab.com/postmarketOS/hkdm
[ttyescape on postmarketOS Gitlab]: https://gitlab.com/postmarketOS/ttyescape
[buffyboard on ArchLinux AUR]: https://aur.archlinux.org/packages/buffyboard
