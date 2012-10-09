---
layout: post
title: "Git - Ignore Changes of File in .gitignore List"
date: 2012-10-09 15:42
comments: true
categories: Git
---

Sometimes it's common that we tracked some files in the git repository first but later decided not to. For instance in rails application it could be `database.yml` file. So you added `database.yml` to `.gitignore` but when you changed something in that file, git will still show you.

## Solution

1. First added files you don't want to track to `.gitignore`
2. Then use either method 1 for single file, or method 2 for folders below.

### method 1: git update-index --assume-unchanged

```
git update-index --assume-unchanged config/database.yml
```

This works very well with single file, I'm not sure but maybe it doesn't support folder.

### Method 2: git rm -r --cached

```bash
# This removes everything from the index
git rm -r --cached .

# This will only add files not listed in the .gitignore
git add .
# then commit it
git commit -m ".gitignore is now working"
```

[git - .gitignore file not ignoring - Stack Overflow](http://stackoverflow.com/questions/1139762/gitignore-file-not-ignoring)