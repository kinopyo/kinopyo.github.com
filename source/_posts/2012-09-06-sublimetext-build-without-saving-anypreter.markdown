---
layout: post
title: "Sublime Text Build without Saving - Anypreter"
date: 2012-09-06 19:00
comments: true
categories: ['SublimeText']
---

## Sublimetext2 Build System

Sublimetext2 ships with its Build System. You can run a ruby file by *Cmd + B* (or through Tools -> Build menu). Here is an example.

{% img https://img.skitch.com/20120906-484u6864itytf4hwsajdaq1qy.jpg Sublimetext Build System %}

One thing bothers me is you have to **SAVE** that file first, you can't run "untitled" ruby code even you specified which build system (language) to use. This was the reason I still keep Textmate in my Mac, thanks to this plugin called [Anypreter](https://github.com/PhilippSchaffrath/Anypreter) I can finally say goodbye to Textmate.

## About Anypreter

You can install it through Package Control. It supports PHP, Python and Ruby.

After specify the language (suppose you haven't saved it), `Ctrl + Shift + X` to run and check the result. Rightclick in the document works too.

## Futher Reading

- [Build Systems — Sublime Text Unofficial Documentation](http://docs.sublimetext.info/en/latest/reference/build_systems.html)
- [Custom Sublime Text Build Systems For Popular Tools And Languages](http://addyosmani.com/blog/custom-sublime-text-build-systems-for-popular-tools-and-languages/)
