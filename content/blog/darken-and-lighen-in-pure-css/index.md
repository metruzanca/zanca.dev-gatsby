---
title: Darken and Lighen in Pure CSS
date: 2020-12-29T05:19:42.009Z
description: How to make SASS's Darken and Lighten mixins in pure CSS and Styled-Components
tags:
  - styled-components
  - darken
  - lighten
  - css
  - react
  - sass
---
If you're coming from SASS, you're likely looking for a way to lighten and darken colors. After having this issue many times myself, I've found a Pure CSS solution that involves using the brightness filter.

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
