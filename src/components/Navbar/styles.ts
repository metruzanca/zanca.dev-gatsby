import styled, {css} from 'styled-components'

import {theme, Link, HeadingCSS, darken, Breakpoints, up} from '../../style'

// Logo(zancadev)      Nav[Home, Projects, Services, About, Contact, Blog]     Social[Linkedin, GitHub, Resume]

export const NavWrapper = styled.header`
  display: inline;
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  height: ${theme.nav.height}px;
  background-color: ${theme.bg.primary};
  ${darken(.2)}
  //TODO make this centering MUCH better
  padding: 25px 20px;
  position: sticky;
  top:0;
  z-index:100;
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
  display: inline;
  text-decoration: none;
  padding: 0;
  margin: 0;
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

export const MenuIcon = styled.label`

`

export const Hamburger = styled.span`
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background-color .2s ease-out;
  width: 18px;

  &:before, &:after {
    background: red;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  ${up(Breakpoints.small)} {
    display: none;
  }
`

export const MenuButton = styled.input`
  display: none;

  &:checked ~ ${MenuIcon} ${Hamburger} {
    background-color: transparent;
  }

  &:checked ~ ${MenuIcon} ${Hamburger}:before {
    transform: rotate(-45deg);
    top:0;
  }

  &:checked ~ ${MenuIcon} ${Hamburger}:after {
    transform: rotate(45deg);
    top:0;
  }
`



/*
  <MenuButton/>
  <MenuIcon>
    <Hamburger></Hamburger>
  </MenuIcon>

*/