// Credit to Ash Bryant -> https://twitter.com/ashbryant
// Reimplemented based on https://codepen.io/ashbryant/pen/JCHar

import styled, { keyframes } from "styled-components";
import { down, theme, Breakpoints } from "../../style";

const scroll = keyframes`
  0% {
    opacity: 1;
    top: 29%;
  }
  15% {
    opacity: 1;
    top: 50%;
  }
  50% {
    opacity: 0;
    top: 50%;
  }
  100% {
    opacity: 0;
    top: 29%;
  }
`

export const MouseScroll = styled.a`
  display: inline-block;
  line-height: 18px;
  font-size: 13px;
  font-family: ${theme.font.Heading};
  letter-spacing: 2px;
  margin-top: 10%;
  text-decoration: none;
  overflow: hidden;
  
  ${down(Breakpoints.small)} {
    display: none
  }
`

export const Mouse = styled.span`
  position: relative;
  display: block;
  width: 46px;
  height: 73px;
  margin: 0 auto 20px;
  box-sizing: border-box;
  border: 3px solid #FFF;
  border-radius: 23px;
`

export const MouseWheel = styled.span`
  position: absolute;
  display: block;
  top: 29%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  background: #FFF;
  border-radius: 50%;
  animation: ${scroll} 4s linear infinite;
`

export const MouseMessage = styled.span`
  float: left;
  margin: 0 0 0 7px;
  padding: 0;
  animation: ${scroll} 4s linear infinite;
  color: white;
`