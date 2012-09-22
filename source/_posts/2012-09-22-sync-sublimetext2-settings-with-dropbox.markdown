---
layout: post
title: "Sync SublimeText2 Settings with Dropbox"
date: 2012-09-22 15:04
comments: true
categories: SublimeText
---

## Overview ##

In order to sync SublimeText2 settings with Dropbox, you need to symlink these folders of SublimeText to your dropbox.

- Packages
- Installed Packages
- Pristine Packages

## On your main machine ##

cd to your dropbox folder where your want to symlink to.

```bash
cd ~/Dropbox/99_Sync/SublimeText
ln -s "/Users/your_user_name/Library/Application Support/Sublime Text 2/Packages/" Packages
ln -s "/Users/your_user_name/Library/Application Support/Sublime Text 2/Installed Packages/" 'Installed Packages'
ln -s "/Users/your_user_name/Library/Application Support/Sublime Text 2/Pristine Packages/" 'Pristine Packages'
```

## On your second machine ##

```bash
cd "/Users/your_user_name/Library/Application Support/Sublime Text 2"
rm -rf Installed\ Packages
rm -rf Packages
rm -rf Pristine\ Packages
ln -s ~/Dropbox/99_Sync/SublimeText/Installed\ Packages 'Installed Packages'
ln -s ~/Dropbox/99_Sync/SublimeText/Pristine\ Packages 'Pristine Packages'
ln -s ~/Dropbox/99_Sync/SublimeText/Packages Packages
```