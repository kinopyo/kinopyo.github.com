---
layout: post
title: "Notes on Fast Test, Slow Test"
date: 2013-05-30 21:56
comments: true
categories: Testing
---

Recently I got lots of inspirations and thoughts on how to write good tests. Thanks to Cookpad, the company I’m working on, I get the chance to work on a very large scale rails app. But it also introduces me to some very bad tests. Sometimes I found myself so difficult to add any spec, as it needs lots of extra efforts to make the fixture data, also one model got too many dependencies and collaborators, etc. I know it’s wrong, the code smells, just don’t know where to start.

So when I watched this video “Fast Test, Slow Test” by [@garybernhardt](https://twitter.com/garybernhardt), who also runs [DestroyAllSoftware screencast](https://www.destroyallsoftware.com/screencasts), I found it very helpful and wanted to take some notes on it.

<div class="video-container">
<iframe width="640" height="480" src="http://www.youtube.com/embed/RAxiiRPHS9k?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

# Three Goals in Testing
- Prevent Regression
- Prevent Fear
- Prevent Bad Design

# How to Fail in Testing
- Selenium as primary testing
- “Units Test” are too large
- Fine-grained tests around legacy code

> What you’re saying here is that we acknowledge that this code sucks, so we’re going to go in and write tight tests around it that solidifies interface and just bake the badness forever. **This is the worst way to do unit testing, go in your legacy system and write test around bad code.**

# Too many dependencies in test
> You end up with a test suite where it tends to either completely succeed or completely fail. It doesn’t give you any fine-grained feedback about what has actually gone wrong it just tells you you broke something. And you are left to dig these stack traces. **In the ideal test suite you don’t have to dig through stack traces because ideally once test fails it will tell you exactly was broken (of course you never achieve that)**

# More than 8 lines for a model test
> I would ask myself why do I need to setup so much of the world to test this one small piece of behavior. That causes me to decompose it which causes better system design.

# 10% System/Acceptance Test, 90% Unit Test
(in terms of test cases, not lines of code)

> That applies to mostly object heavy system like web app, that have a lot of logic and not a lot of boundaries.

# Advice on models that very tied to database
## Question
> If you're working with model objects that they're very tied to the database specifically things like you have to save that one object before you can associate with the other object and that means hitting the database. What's your advice in terms of writing fast unit test?

## Answer
> Take all of that behavior that's on your model objects and pull out of their into service classes that are stateless, that interact with the model objects. So view calls a service, service contains the intelligence and the service manipulates the model objects.

> You can still have methods on your model objects do things like wrap specific queries in class methods, or wrap specific mutations when multiple fields are commonly manipulated together.

> It's okay to have those on your model object and then have the service use those but if you pull the behavior of the system out into the service, and you control the boundary between the service in the model by those methods you've written on the model, then you can mock out more easily and safely.
