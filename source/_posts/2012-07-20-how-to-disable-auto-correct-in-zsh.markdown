---
layout: post
title: "How to disable auto correct in oh-my-zsh"
date: 2012-07-20 20:35
comments: true
categories: zsh
---

[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) is very handy and I've been using it for almost a year. But I found the auto correct is kind of annoying and barely helped me.

## Disable it globally
Add this `unsetopt` to your ~/.zshrc

```bash
source $ZSH/oh-my-zsh.sh

unsetopt correct_all
```

## Disable it per command base
Say if you just want to disable it for `git` command, you can setup an alias.

```
alias git=’nocorrect heroku’
```

I didn't test out this one :)

References:
- [Issue #534: auto-correcting sucks hard · robbyrussell/oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh/issues/534)
- [Issue #949: Disable autocorrect lg to log · robbyrussell/oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh/issues/949)