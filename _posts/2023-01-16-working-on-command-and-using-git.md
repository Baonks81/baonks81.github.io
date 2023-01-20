---
layout: post
category: jekyll
permalink: /working-on-command-and-using-git/
---

When I wanna push source code to git, I saw 2 ways to do that. The first, I could use website, but it's so hard to create folder, located file position. The second, using command on terminal, if you used GNU/Linux, it's the best way working with git (github or gitlab). But gitlab had CI, pineline to passed for merge new MR

So I decided trying my web source-code at the time, I have to follow some command, such as:

```
...

git init

git add .

git commit -m "Push my blog source code final"

git remote add origin https://github.com/...

...
```
