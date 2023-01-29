---
layout: post
category: lk2nd
permalink: /msm8916-redmi-2-and-samsung-galaxy-a5-duos/
---

I wrote some lk2nd experiences at previous post. Xiaomi Redmi 2(wt88057, wt86047) and Samsung Galaxy A5 Duos (sm-a53g) implements msm8916.
Of course, I had to add dts in lk2nd for sm-a53g, wt88047 and wt86047 were there, other devs handle those. Because sm-a53g had the same architechure with sm-a5lte and sm-a5ulte.
I found those [there]

```
...

/* qcom, msm id */
qcom-id-msm8916 206 ← a5lte and a5ulte

qcom-id-apq8016 247

qcom-id-msm8216 248 ← this is a53g

qcom-id-msm8116 249

qcom-id-msm8616 250

...

```

In lk2nd, it had new dts with 248 mark in [msm8216-samsung-r08.dts].
When I finished those steps, it'll easy to install pmOS(AlpineLinux), I followed this [step] and [here]. If I could ports my devices to run GNU/Linux, you can do it.

<iframe width="420" height="315" src="https://m.youtube.com/embed/zhkdnFGy29c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

[there]: https://patchwork.ozlabs.org/project/devicetree-bindings/patch/1450371534-10923-20-git-send-email-mtitinger+renesas@baylibre.com/
[msm8216-samsung-r08.dts]: https://github.com/msm8916-mainline/lk2nd/blob/master/dts/msm8916/msm8216-samsung-r08.dts
[step]: https://wiki.postmarketos.org/wiki/Xiaomi_Redmi_2_(xiaomi-wt88047)
[here]: https://wiki.postmarketos.org/wiki/Samsung_Galaxy_A5_2015_(samsung-a5)
