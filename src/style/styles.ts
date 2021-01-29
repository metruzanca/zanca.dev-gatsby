import { Link as GatsbyLink} from 'gatsby'
import styled, { createGlobalStyle, css } from 'styled-components'

import theme from './theme' 

export const Link = styled(GatsbyLink)`
  color: ${theme.fg.links};
  &:visited {
    color: ${theme.fg.linksVisited};
  }
`

export const Highlight = styled.span`
  color:${theme.fg.accent};
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`

// Selectors like :root don't seem to work.
// Might be a styled issue or a gatsby issue 
// const DarkScrollBar = css`
//   /* Firefox */
//   :root {
//     scrollbar-color: #5a5e80 #1b1d2c;
//   }
  
//   /* Chrome */
//   ::-webkit-scrollbar {
//     width: 8px;
//   }

//   ::-webkit-scrollbar-track {
//     background-color: #1b1d2c;
//   }

//   ::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     background-color: #5a5e80;
//   }
// `

const Headings = css`
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.font.Heading};
    margin-top: ${theme.spacing_12};
    margin-bottom: ${theme.spacing_6};
    line-height: var(--lineHeight-tight);
    letter-spacing: -0.025em;
  }

  h2, h3, h4, h5, h6 {
    font-weight: var(--fontWeight-bold);
    color: var(--color-heading);
  }

  h1 {
    font-weight: var(--fontWeight-black);
    font-size: ${theme.font.Size_6};
    /* color: var(--color-heading-black); */
  }

  h1 a:visited { color: var(--color-text); }

  h2 { font-size: ${theme.font.Size_5}; }
  h3 { font-size: ${theme.font.Size_4}; }
  h4 { font-size: ${theme.font.Size_3}; }
  h5 { font-size: ${theme.font.Size_2}; }
  h6 { font-size: ${theme.font.Size_1}; }

  h1 > a , h2 > a, h3 > a, h4 > a, h5 > a, h6 > a {
    text-decoration: none;
    color: inherit;
  }
`

const HtmlElements = css`
  *, :after, :before {
    box-sizing: border-box;
  }

  html {
    line-height: var(--lineHeight-normal);
    font-size: var(--fontSize-root);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-body);
    font-size: var(--fontSize-1);
    color: var(--color-text);
  }

  footer {
    padding: var(--spacing-6) var(--spacing-0);
  }

  /* Take from footer styles */
  /* TODO remove from footer? */
  hr {
    background: var(--color-accent);
    height: 1px;
    border: 0;
  }
`

const links = css`
  a {
    color: var(--color-links);
  }

  a:visited {
    color: var(--color-links-visited);
  }

  a:hover, a:focus {
    text-decoration: none;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${Headings}
`

export const BlogProse = createGlobalStyle`
  /* Prose */

  p {
    line-height: var(--lineHeight-relaxed);
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);
    padding: var(--spacing-0);
  }

  ul, ol {
    margin-left: var(--spacing-0);
    margin-right: var(--spacing-0);
    padding: var(--spacing-0);
    margin-bottom: var(--spacing-8);
    list-style-position: outside;
    list-style-image: none;
  }

  ul li, ol li {
    padding-left: var(--spacing-0);
    margin-bottom: calc(var(--spacing-8) / 2);
  }

  li > p {
    margin-bottom: calc(var(--spacing-8) / 2);
  }

  li *:last-child {
    margin-bottom: var(--spacing-0);
  }

  li > ul {
    margin-left: var(--spacing-8);
    margin-top: calc(var(--spacing-8) / 2);
  }

  blockquote {
    color: var(--color-text-light);
    margin-left: calc(-1 * var(--spacing-6));
    margin-right: var(--spacing-8);
    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);
    border-left: var(--spacing-1) solid var(--color-links);
    font-size: var(--fontSize-2);
    font-style: italic;
    margin-bottom: var(--spacing-8);
  }

  blockquote > :last-child {
    margin-bottom: var(--spacing-0);
  }

  blockquote > ul, blockquote > ol {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: var(--spacing-8);
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table thead tr th {
    border-bottom: 1px solid var(--color-accent);
  }

  /* Custom classes */
  /* TODO MOVE THIS  TO POST.TSX */
  .post-list-item {
    margin-bottom: var(--spacing-8);
    margin-top: var(--spacing-8);
  }

  .post-list-item p {
    margin-bottom: var(--spacing-0);
  }

  .post-list-item h2 {
    font-size: var(--fontSize-4);
    color: var(--color-links);
    margin-bottom: var(--spacing-2);
    margin-top: var(--spacing-0);
  }

  .post-list-item header {
    margin-bottom: var(--spacing-4);
  }

  .bio {
    display: flex;
    margin-bottom: var(--spacing-16);
  }

  .bio p {
    margin-bottom: var(--spacing-0);
  }

  .bio-avatar {
    margin-right: var(--spacing-4);
    margin-bottom: var(--spacing-0);
    min-width: 50px;
    border-radius: 100%;
  }

  .blog-post header h1 {
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
  }

  .blog-post header p {
    font-size: var(--fontSize-2);
    font-family: var(--font-heading);
  }

  .blog-post-nav ul {
    margin: var(--spacing-0);
  }

  /* Media queries */

  @media (max-width: 42rem) {
    blockquote {
      padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-4);
      margin-left: var(--spacing-0);
    }
    ul,
    ol {
      list-style-position: inside;
    }
  }
`