---
layout: post
title: "Machinist 1.0: How to generate an object without saving it to the database"
date: 2012-07-20 20:12
comments: true
categories: machinist rspec test
---

**CAUTION** It's specific machinist 1.0-maintenance.

## make_unsaved
> If you want to generate an object without saving it to the database, replace `make` with `make_unsaved`

[reference](https://github.com/notahat/machinist/tree/1.0-maintenance#blueprints---generating-objects)

So remember to use `make_unsaved`.

### More
If you're interested, here is the source code.

- [https://github.com/notahat/machinist/blob/1.0-maintenance/lib/machinist/active_record.rb#L61](https://github.com/notahat/machinist/blob/1.0-maintenance/lib/machinist/active_record.rb#L61)
- [https://github.com/notahat/machinist/blob/1.0-maintenance/lib/machinist.rb#L107](https://github.com/notahat/machinist/blob/1.0-maintenance/lib/machinist.rb#L107)

## Under latest version

Well if you're using latest machinist, which is 2.0 at this point, it's much simpler and cleaner.

`make` for generating but not saving an object, `make!` for saving it to database.