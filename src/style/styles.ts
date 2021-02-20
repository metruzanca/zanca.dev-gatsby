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

/**
 * Converts Hex to Hex + Alpha channel
 * @param hex Hex value
 * @param percent Percentage value in the format of 0-1 akin to rgba's last value
 */
export function hexa(hex: string, percent: number){  
  return `${hex}${Math.floor((255 * percent)).toString(16)}`
}

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-self: center;
`

export const CenterDiv = styled.div`
  ${flexCenter}
`

// TODO Make use of this and standardize / put in namespace/class
export const bigButton = (color: string) => css`
  color: ${color};
  &:visited { color: ${color}; }
  font-size: ${theme.font.Size_0};
  font-family: ${theme.font.mono};
  line-height: ${theme.lineHeight_none};
  text-decoration: none;
  
  background-color: transparent;
  border: 1px solid ${color};
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  
  cursor: pointer;
  
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover, &:focus, &:active {
    background-color: ${hexa(color, 0.1)};
  }
`

const Headings = css`
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.font.Heading};
    margin-top: ${theme.spacing_12};
    margin-bottom: ${theme.spacing_6};
    line-height: ${theme.lineHeight_tight};
    letter-spacing: -0.025em;
  }

  h2, h3, h4, h5, h6 {
    font-weight: ${theme.font.Weight_bold};
    color: ${theme.fg.primary};
  }

  h1 {
    font-weight: ${theme.font.Weight_black};
    font-size: ${theme.font.Size_6};
    color: ${theme.fg.primary};
  }

  h1 a:visited { color: ${theme.fg.primary}; }

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
    line-height: ${theme.lineHeight_normal};
    font-size: ${theme.font.Size_root};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${theme.font.body};
    font-size: ${theme.font.Size_1};
    color: ${theme.fg.primary};
  }

  footer {
    padding: ${theme.spacing_6} ${theme.spacing_0};
  }

  /* Take from footer styles */
  /* TODO remove from footer? */
  hr {
    background: ${theme.fg.primary};
    height: 1px;
    border: 0;
  }
`

const links = css`
  a {
    color: ${theme.fg.links};
  }

  a:visited {
    color: ${theme.fg.linksVisited};
  }

  a:hover, a:focus {
    text-decoration: none;
  }
`
// TODO move this to just the blog section?
const BlogProse = css`
  p {
    line-height: ${theme.lineHeight_relaxed};
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: ${theme.spacing_0} ${theme.spacing_0} ${theme.spacing_8} ${theme.spacing_0};
    padding: ${theme.spacing_0};
  }

  ul, ol {
    margin-left: ${theme.spacing_0}; 
    margin-right: ${theme.spacing_0};
    padding: ${theme.spacing_0};
    margin-bottom: ${theme.spacing_8};
    list-style-position: outside;
    list-style-image: none;
  }

  ul li, ol li {
    padding-left: ${theme.spacing_0};
    margin-bottom: calc(${theme.spacing_8} / 2);
  }

  li > p {
    margin-bottom: calc(${theme.spacing_8} / 2);
  }

  li *:last-child {
    margin-bottom: ${theme.spacing_0};
  }

  li > ul {
    margin-left: ${theme.spacing_8};
    margin-top: calc(${theme.spacing_8} / 2);
  }

  blockquote {
    color: ${theme.fg.primary};
    margin-left: calc(-1 * ${theme.spacing_6});
    margin-right: ${theme.spacing_8};
    padding: ${theme.spacing_0} ${theme.spacing_0} ${theme.spacing_0} ${theme.spacing_6};
    border-left: ${theme.spacing_1} solid ${theme.fg.links};
    font-size: ${theme.font.Size_2};
    font-style: italic;
    margin-bottom: ${theme.spacing_8};
  }

  blockquote > :last-child {
    margin-bottom: ${theme.spacing_0};
  }

  blockquote > ul, blockquote > ol {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: ${theme.spacing_8};
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table thead tr th {
    border-bottom: 1px solid ${theme.fg.accent};
  }

  /* Custom classes */
  /* TODO MOVE THIS  TO POST.TSX */
  .post-list-item {
    margin-bottom: ${theme.spacing_8};
    margin-top: ${theme.spacing_8};
  }

  .post-list-item p {
    margin-bottom: ${theme.spacing_0};
  }

  .post-list-item h2 {
    font-size: ${theme.font.Size_4};
    color: ${theme.fg.links};
    margin-bottom: ${theme.spacing_2};
    margin-top: ${theme.spacing_0};
  }

  .post-list-item header {
    margin-bottom: ${theme.spacing_4};
  }

  .bio {
    display: flex;
    margin-bottom: ${theme.spacing_16};
  }

  .bio p {
    margin-bottom: ${theme.spacing_0};
  }

  .bio-avatar {
    margin-right: ${theme.spacing_4};
    margin-bottom: ${theme.spacing_0};
    min-width: 50px;
    border-radius: 100%;
  }

  .blog-post header h1 {
    margin: ${theme.spacing_0} ${theme.spacing_0} ${theme.spacing_4} ${theme.spacing_0};
  }

  .blog-post header p {
    font-size: ${theme.font.Size_2};
    font-family: ${theme.font.Heading};
  }

  .blog-post-nav ul {
    margin: ${theme.spacing_0};
  }

  /* Media queries */

  @media (max-width: 42rem) {
    blockquote {
      padding: ${theme.spacing_0} ${theme.spacing_0} ${theme.spacing_0} ${theme.spacing_4};
      margin-left: ${theme.spacing_0};
    }
    ul,
    ol {
      list-style-position: inside;
    }
  }
`

export const BlogGlobalStyle = createGlobalStyle`
  ${Headings}
  ${HtmlElements}
  ${BlogProse}
  ${links}
`

export const GlobalStyle = createGlobalStyle`
  ${Headings}
  ${HtmlElements}
  ${links}
`