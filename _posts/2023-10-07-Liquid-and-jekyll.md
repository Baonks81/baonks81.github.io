---
layout: post
category: jekyll
---

When I write code for websites, I often use for..end for collections of posts, tags, etc. After using it for the most recent posts I discovered, the post identifier when selected and collected Combined posts in recent articles are different.

Specifically, when you select the 3rd post position, in the most recent post the cursor will understand that you have moved to the 3rd position, positions 0-2 will be considered as text for all include, image etc. Positions 4 to the end of the set will be interpreted as normal posts.

{% include image.html
            img="images/Liquid_logo_wide.jpg"
            title="open-source template language" 
            caption="open-source template language"
            url="https://shopify.github.io/liquid/tags/iteration/" %}

[Liquid] is an open source template language created by Shopify and written in Ruby. It is the backbone of Shopify themes and is used to load dynamic content on storefronts. Almost identical to ASP, besides javascript on the website.

[Liquid]: https://shopify.github.io/liquid/
