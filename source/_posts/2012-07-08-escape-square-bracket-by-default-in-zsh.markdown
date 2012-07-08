---
layout: post
title: "Escape square brackets by default in zsh"
date: 2012-07-08 18:45
comments: true
categories: [octopress, zsh]
---

## Square brackets in zsh
Square brackets in zsh have special meanings but in MOST circumstances maybe you just have to escape them by putting `\`(backslash) before them.

### Here is a example for generating a new octopress post

```bash
rake new_post["Escape square bracket by default in zsh"]
zsh: no matches found: new_post[Escape square bracket by default in zsh]

rake new_post\["Escape square bracket by default in zsh"\]
mkdir -p source/_posts
Creating new post: source/_posts/2012-07-08-escape-square-bracket-by-default-in-zsh.markdown
```

## How to escape by default?

Just setup this alias in your `.zshrc`.

```bash
alias rake='noglob rake'
```