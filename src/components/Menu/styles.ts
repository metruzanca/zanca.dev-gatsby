import styled from "styled-components";
import {theme, flexCenter, bigButton} from '../../style'

// TODO centralize in theme.ts
const zLayers = {
  sidebar: 9,
  button: 10,
}

export const Wrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
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

type MenuOpen = {menuOpen:boolean}


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
    visibility: ${p => (p.menuOpen ? 'visible' : 'hidden')};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

/* TODO Re-theme the ol and li to match the rest of the site */

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(14px, 4vw, 18px);

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: ${theme.fg.accent};
        font-size: 14px;
      }
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      position: relative;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);;
      cursor: pointer;
      &:hover, &:active, &:focus {
        color: ${theme.fg.accent};
        outline: 0;
      }
      width: 100%;
      padding: 3px 20px 20px;
    }
  }
`;

export const Nav = styled.nav`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  color:  ${theme.fg.lightBlueishGray};
  font-family: ${theme.font.mono};
  text-align: center;
`

export const ResumeLink = styled.a`
  ${bigButton(theme.fg.accent)}
  padding: 18px 50px;
  margin: 10% auto 0;
  width: max-content;
`