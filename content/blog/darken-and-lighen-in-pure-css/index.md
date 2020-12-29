---
title: Darken and Lighen in Pure CSS
date: 2020-12-29T05:48:09.485Z
description: How to make SASS's Darken and Lighten mixins in pure CSS and Styled-Components
tags:
  - styled-components
  - darken
  - lighten
  - css
  - react
  - sass
---
If you're coming from SASS, you're likely used to all the helpful mixins it comes with e.g. lighten and darken.

This feature is missing from many frameworks like my favorite, Styled-Components.

> The Styled-Components specific solution to this is [Polished](https://github.com/styled-components/polished).

But if you want a solution that works in all frameworks by just using Pure CSS, this is what this short post is about. 

### CSS

If you're just looking for the css to copy and paste, heres 10% lighter and 10% darker.

```css
.lighten {
  filter: brightness(110%);
}

.darken {
  filter: brightness(90%);
}
```

> NB: this will change the entire element's brightness.

### Styled-Components

If you use something like Styled-Components, then these two helpers could come in handy to you.

```ts
const lighten = (value:number) => css`
  filter: brightness(${value + 1});
`

const darken = (value:number) => css`
  filter: brightness(${1 - value});
`
```

#### Usage:

```ts
// import theme from '...'

const StyledButton = styled.button`
  background-color: ${theme.bg.primary};
  &:hover{
    ${darken(.2)}
  }
`
