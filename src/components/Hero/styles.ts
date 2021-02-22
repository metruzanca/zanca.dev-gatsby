import styled from "styled-components";

import {HeadingCSS, theme} from '../../style'

export const HeroSection = styled.section`
  height: 80vh;
  /* TODO This won't do it for mobile responsive. Must lookup how to make responsive hero section */
  margin: 0 auto;
  max-width: 70vw;
`

export const HeroHeading = styled.h1`
  padding-top: 1em;
  ${HeadingCSS}
  font-weight: 500;
  font-size: ${theme.font.Size_7};
`

export const HeroParagraph = styled.p`
  max-width: 375px;
  font-size: 16px;
  font-family: ${theme.font.Heading};
  font-weight: 400;
  color: ${theme.fg.blueishGray};
`
// TODO make a global style button
export const CallToAction = styled.button`
  font-size: 14px;
  font-family: ${theme.font.Heading};
  font-weight: 600;
  & > a {
    color: ${theme.fg.primary};
    text-decoration: none;
  }
  cursor: pointer;

  padding: 0 30px;
  height: 50px;

  border: none;
  border-radius: ${theme.ctaRadius};
  background-color: ${theme.fg.links};
  &:hover{
    background-color: #586fd5;
  }
`