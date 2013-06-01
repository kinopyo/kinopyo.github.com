---
layout: post
title: "Notes on Let's Make Testing Fun Again"
date: 2013-06-01 15:18
comments: true
categories: Testing
---

## The talk
[Let's Make Testing Fun Again at WindyCityRails 2012 | Lanyrd](http://lanyrd.com/2012/windycityrails/sxqbt/)

<script async class="speakerdeck-embed" data-id="5048ea4bb8fe2d0002020475" data-ratio="1.2994923857868" src="//speakerdeck.com/assets/embed.js"></script>

<div class='video-container'>
<iframe src="http://player.vimeo.com/video/49525644" width="400" height="300" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

## Communication

> Tests give you about the code. This happens over time, where you find that tests have become hard to write, the tests are becoming complicated and bogged down.

> Rather than use it as an opportunity to blame the test or to blame testing, **you should use it as an opportunity to learn something about your code, that there is a dependency that could potentially be simplified, or something you could be doing better.**

## Keep relevant setup close

> This is something that "relative good"(in terms of "absolute good"). It's generally good to keep the setup of your tests close to the tests where it is.

> What you want to avoid is the case where some sort of `before` setup way at the top of the file and you have stuff, and more stuff, and more stuff, and eventually in the end, what's the `@user.name`? I don't remember.

### An Example

```ruby

describe User do
  before do
    @user = Factory.build(:user)
  end

  # and more stuff

  # and more stuff

  it "uses the user" do
    @user.name.should == # i don't remember
  end
end
```

This is where you see sometimes people say "You should never have setup outside your original test".

### What to do about duplications and complicate shared setups

> I think a lot of times if you need a complicated setup to test code, that often means your code is too complicated you need to start working out to move your dependencies. **I tend to have a higher tolerance for duplication in my tests** than I do in my regular code, specifically because **I'm more interested in having the communication close**, and less interested in maybe being clever about extracting setups in my tests. Sometimes I do if there's a piece of stuff that's really tightly coupled, and I can give it a descriptive enough name that I still feel like I have the benefit of keeping the setup close in the actual test.

## Test Simple Values
By using literal in check, when the spec fails, the error message is much easier to understand.

## Spy, don't mock
A [jasmine](http://pivotal.github.io/jasmine/)
 test example.

```js
var cheeseburger = {
  cheeses: function() {
    // Ajax call to cheese server
  }
};

it('spies on the cheese server', function() {
  spyOn(cheeseburger, 'cheeses');
  cheeseburger.cheeses();
  expect(cheeseburger.cheeses).toHaveBeenCalled();
});

```

- Readability advantage
- Easy to find where actually fails

BTW, if in spec, we need write like this:
```ruby

it 'spies on the cheese server' do
  # in the reversed order
  cheeseburger.should_receive(:cheeses)
  cheeseburger.cheeses
end
```
### More about Spy on Ruby and Rails

[thoughtbot/bourne](https://github.com/thoughtbot/bourne) gem can let you have the rspec-like test spies syntax.

[Spy vs spy](http://robots.thoughtbot.com/post/159805295/spy-vs-spy), good explanation on what is test spy the benefit of it.

## What Do We Love?
These are quite frank and interesting questions.

1. Do we still love writing tests?
2. Or do we just love having written tests?
3. Or do we just love saying that we've written tests?
