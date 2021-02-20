import styled from "styled-components";
import {theme, flexCenter, bigButton, hexa} from '../../style'
import { Link as GatsbyLink } from "../../style"

// TODO centralize in theme.ts
const zLayers = {
  sidebar: 9,
  button: 10,
}

type MenuOpen = {menuOpen:boolean}

export const Wrapper = styled.div<MenuOpen>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right:0;
      width: 100vw;
      height: 100vh;
      /* background-color: red; */
      background-color: ${hexa(theme.bg.footer, 0.75)};
      transition: opacity 0.15s linear;
      opacity: ${p => p.menuOpen ? '1' : '0'};
    }
  }
`;

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    /* Button reset */
    border: 0;
    background-color: transparent;
    
    ${flexCenter}
    position: relative;
    z-index: ${zLayers.button};
    margin-right: -15px;
    padding: 15px;
    
    transition:
      opacity 0.15s linear,
      filter 0.15s linear;
  }
`;

export const HamburgerBox = styled.div`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 24px;
`

export const InnerBox = styled.div<MenuOpen>`
  position: absolute;
  top: 50%;
  right: 0;
  width: 30px;
  height: 2px;

  background-color: ${theme.fg.accent};
  
  transition: transform 0.22s ${p => (p.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${p => (p.menuOpen ? `225deg` : `0deg`)});

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${theme.fg.accent};
  }

  &:before {
    top: ${p => p.menuOpen ? `0` : `-10px`};
    opacity: ${p => p.menuOpen ? 0 : 1};
    transition: ${p => p.menuOpen 
      ? `
        top 0.1s ease-out,
        opacity 0.1s ease-out 0.12s
      ` 
      : `
        top 0.1s ease-in 0.25s, 
        opacity 0.1s ease-in
      `};
  }

  &:after {
    bottom: ${p => p.menuOpen ? `0` : `-10px`};
    transform: rotate(${p => p.menuOpen ? `-90deg` : `0`});
    transition: ${p => p.menuOpen
      ? `
        bottom 0.1s ease-out,
        transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s
      `
      : `
        bottom 0.1s ease-in 0.25s, 
        transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)
      `};
  }
`

export const BrittanyChiangInnerBox = styled(InnerBox)`
  &:before {
    width: ${p => p.menuOpen ? `100%` : `120%`};
  }
  &:after {
    width: ${p => p.menuOpen ? `100%` : `80%`};
  }
  &:before, &:after {
    right: 0;
  }
`

export const Sidebar = styled.aside<MenuOpen>`
  display: none;

  @media (max-width: 768px) {    
    ${flexCenter}
    position: fixed;
    top: 0;
    right: 0;
    z-index: ${zLayers.sidebar};
    height: 100vh;
    width: min(75vw, 400px);
    padding: 50px 10px;
    background-color: ${theme.bg.thirdiary};

    box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
    
    transform: translateX(${p => p.menuOpen ? 0 : 100}vw);
    visibility: ${p => p.menuOpen ? 'visible' : 'hidden'};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const Nav = styled.nav`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  color:  ${theme.fg.lightBlueishGray};
  font-family: ${theme.font.mono};
  text-align: center;

  & div {
    width: 100%;
    margin: 0 auto 3em;
    @media (max-width: 600px) {
      margin: 0 auto 1.5em;
    }
  }
`

export const Link = styled(GatsbyLink)`
  display: inline-block;
  width: 60%;
  padding: 0.2em 0 1em;

  font-size: ${theme.font.Size_2};
  text-decoration: none;

  /* TODO move this transition to all Links for the on hover */
  transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover, &:active, &:focus {
    color: ${theme.fg.accent};
  }
`

export const ResumeLink = styled(GatsbyLink)`
  ${bigButton(theme.fg.accent)}
  font-size: ${theme.font.Size_1};
  padding: 18px 50px;
  margin: 10% auto 0;
  width: max-content;
`