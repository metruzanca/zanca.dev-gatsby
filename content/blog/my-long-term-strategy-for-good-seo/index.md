---
title: My Long-Term Strategy for Good SEO
date: 2021-01-01T16:16:43.943Z
description: TODO
tags:
  - SEO
  - Blog
  - devlog
  - ""
---
When designing a website, it's good to have a general idea of what you want long-term and short-term. Then build strategies around the two, to make sure you're on track for both.

For me, my short-term goal was to **Get my Blog Published by the end of the year** (*I started working on this in late December of 2020*) and my long term was to **write Great Content that Ranked High on Google**.

## Short Term

My short-term was easy to achieve. In fact, I achieved it in a day and detailed the whole process over in my [Creating a Personal Website](https://zbest.dev/blog/personal-portfolio-blog-gatsby-netlify-cms/) post.

## Long Term

Meanwhile my Long-Term plan had a few extra steps. The First of which was really easy to do and thats *Design a Long-Term URL Structure*. 

This step is really important to do before you hand in your first SiteMap to the search engines, because if you change your URL structure, you can severly impact your ranking. Lucky for us Its really easy for blogging and can be broken down into a few pointers.

### Good URL Structure

#### 1. Don't change your URLs
This means that once you publish a page to the world, you want to avoid changing the URL. Why? Lets think of a practical example. If you scroll up to the [Short-Term](#TODO link to this page#Short-Term) paragraph, you'll notice I have a link  to another blog post. Great, now Imagine you've changed the URL to that post and you've just broken an internal link which you have control of. Sure, you can change this URL by editing the blog post or automate this process somehow by using blog IDs or something. But what about pages you can't edit. E.g. If someone were to link to your article "...check out this amazing post by Samuele talking about SEO Strategy..." and clicking that link leads to a 404. Doesn't look too good does it? Its probably going to make both of you look bad to have a broken link. Luckily, in the worse case scenario, you could always make a redirect kind of like how [Dan Abramov](https://mobile.twitter.com/dan_abramov) had to do on his ([Blog](http://overreacted.io))

```js
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Oops
  createRedirect({
    fromPath: '/zh_TW/things-i-dont-know-as-of-2018/',
    toPath: '/zh-hant/things-i-dont-know-as-of-2018/',
    isPermanent: true,
    redirectInBrowser: true,
  });
  // Oops 2
  createRedirect({
    fromPath: '/not-everything-should-be-a-hook/',
    toPath: '/why-isnt-x-a-hook/',
    isPermanent: true,
    redirectInBrowser: true,
  });
  // Oops 3
  createRedirect({
    fromPath: '/making-setinterval-play-well-with-react-hooks/',
    toPath: '/making-setinterval-declarative-with-react-hooks/',
    isPermanent: true,
    redirectInBrowser: true,
  });
// Source https://github.com/gaearon/overreacted.io/blob/master/gatsby-node.js
```

// TODO Write more here in this section
e.g. Bad gatsby default of no /blog/ slug

this point is bad "off-site SEO"

### 2. Page Title and Metadata

title -> 20-50 chars long
Show screenshot of how title & meta shows up on search.

How you get good defaults from gatsby

### 3. 









