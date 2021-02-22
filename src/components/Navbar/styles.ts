import styled, {css} from 'styled-components'

import {theme, Link, HeadingCSS, Breakpoints, down, up} from '../../style'

export const NavWrapper = styled.header`
  display: inline;
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  height: ${theme.nav.height}px;
  background-color: ${theme.bg.thirdiary};
  //TODO make this centering MUCH better
  padding: 25px 20px;
  position: sticky;
  top:0;
  z-index:100;

  ${down(Breakpoints.small)} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const NavLogo = styled.span`
  ${HeadingCSS}
  font-size: ${theme.font.Size_3};
/*TODO Remove this color: white thing */
  & > a, & > a:visited {
    color: white;
  }
  grid-column: 1;
`

export const Nav = styled.nav`
  ${HeadingCSS}
  grid-column: 2;
`

export const NavSocial = styled.span`
  grid-column: 3;
  min-width: 120px;
`

export const Ul = styled.ul`
  text-decoration: none;
  padding: 0;
  margin: 0;

  display: none;
  ${up(Breakpoints.small)} {
    display: inline;
  }
`

export const LinkLi = styled.li`
  display: inline;
  padding: 0 20px 0 0;
`

export const SocialLi = styled.li`
  display: inline;
  padding: 0 10px 0 0;
`

const navlink = css`
  cursor:pointer;
  text-decoration: none;
  
  /* TODO make this the default */
  color: ${theme.fg.links};
  &:visited{
    color: ${theme.fg.links};
  }
  &:hover{
    color: ${theme.fg.accent};
  }
`

const highlighted = css`
  cursor:pointer;
  text-decoration: none;
  color: ${theme.fg.accent};
  &:hover, &:visited{
    color: ${theme.fg.accent};
  }
`
// https://codepen.io/pen/?editors=1100
// https://github.com/bchiang7/v4/blob/main/src/components/menu.js

export const NavLink = styled(Link)`${navlink}`
export const HighlightedNavLink = styled(Link)`${highlighted}`

export const AnchorLink = styled.a`${navlink}`
export const HighlightedAnchorLink = styled.a`${highlighted}`

export const Spacer = styled.li`
  display: inline;
  text-decoration: none;
  padding: 0 20px 0 0;
  color: ${theme.fg.blueishGray};
`