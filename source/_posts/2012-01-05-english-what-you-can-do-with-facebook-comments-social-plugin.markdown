---
layout: post
title: 'What you can do with Facebook Comments Social Plugin'
date: 2012-1-5
wordpress_id: 2598
permalink: /blog/what-you-can-do-with-facebook-comments-social-plugin
comments: true
categories: ["comments", "Facebook", "social plugin"]
---
# Goal

To use facebook comments integrated to your own site.

## Requirements

Need a facebook application for your site(domain).

For example:

{% img http://www.kinopyo.com/wp-content/uploads/2012/01/Screen-Shot-2012-01-05-at-14.21.25.png %}

## How to get it

Fill in the blank and click get code from <a href="https://developers.facebook.com/docs/reference/plugins/comments/">https://developers.facebook.com/docs/reference/plugins/comments/</a>

Then just paste that code to your site(page).

## Functions

+  People who want to comment can choose if post to Facebook, there's a checkbox.

+  Comments posted to facebook are bidirectional. Threads stay synced across Facebook and on the Comments Box on your site regardless of where the comment was made.

+  Sort comments by Social Ranking, Chronological(Time) order

+  Boosting comments: Moderators can now ensure that high-quality comments appear at the top of the Comments Box

&nbsp;

Facebook doesn't explain how the Social Ranking works, but I checked some real-world examples and I guess basically we can consider it sort by like counts.
## Moderation Tools

Put this meta tag in the html.

<span style="color: #008080;"> &lt;meta property="fb:admins" content="{YOUR_FACEBOOK_USER_ID}"/&gt;</span>

Then if you log in with the owner of the application, you can access this url to control comments:

<a href="http://developers.facebook.com/tools/comments">http://developers.facebook.com/tools/comments</a>

or you can do it inside the Comments Box directly.

There're Moderate dropdown to Hide comment, Ban User or Boost comment. In the Settings page you have other options like add moderators or set blacklisted words, etc.

Remember to check all the FAQ on the reference docs, very useful. I wonder why those go to the FAQ though.

# Reference

<a href="https://developers.facebook.com/docs/reference/plugins/comments/">https://developers.facebook.com/docs/reference/plugins/comments/</a>
