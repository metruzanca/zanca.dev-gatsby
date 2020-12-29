import React from "react"
import styled from 'styled-components'

import {theme, Link, HeadingCSS, darken} from '../../style'

// Logo(ZbestDev)      Nav[Home, Projects, Services, About, Contact, Blog]     Social[Linkedin, GitHub, Resume]

export const Nav = styled.header`
  display: inline;
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  height: 80px;
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
/*TODO Remove this color: white thing */
  & > a, & > a:visited {
    color: white;
  }
  grid-column: 1;
`

export const NavNav = styled.nav`
  grid-column: 2;
`
export const NavSocial = styled.span`
  grid-column: 3;
`

export const Ul = styled.ul`
  display: inline;
  text-decoration: none;
  padding: 0;
  margin: 0;
`

export const Li = styled.li`
  display: inline;
  padding: 0 20px 0 0;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  
  &:hover{
    color: ${theme.fg.accent};
  }
  /* TODO make this the default */
  color: ${theme.fg.links};
  &:visited{
    color: ${theme.fg.links};
  }
`

export const HighlightedNavLink = styled(Link)`
  text-decoration: none;
  color: ${theme.fg.accent};
  &:hover, &:visited{
    color: ${theme.fg.accent};
  }
`
// TODO add 75799a to theme
export const Spacer = styled.span`
  padding: 0 20px 0 0;
  color: #75799a;
`