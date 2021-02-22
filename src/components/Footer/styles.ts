import styled from "styled-components";
import { Breakpoints, down, hexa, theme } from "../../style";

export const FooterWrapper = styled.footer`
  padding: 0;
  min-height: 300px;
  position: relative;
  background-color: ${theme.bg.thirdiary};
`

// TODO make responsive
// place sections into a grid where each item grows to fill its space
export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  ${down(Breakpoints.small)} {
    flex-direction: column;
  }
  /* TODO This won't do it for mobile responsive. Must lookup how to make responsive hero section */
  margin: 0 auto;
  max-width: 80vw;
`

export const RotatedTextContainer = styled.div`
  padding-top: 100px;

  ${down(Breakpoints.small)} {
    display: none;
  }
`

export const RotatedText = styled.div`
  display: inline-block;
  transform: rotate(-90deg);
  font-size: ${theme.font.Size_6};
  color: ${theme.fg.blueishGray};
  font-family: ${theme.font.Heading};
  font-weight: 600;
  margin-right: .5em;
  position: relative;

  // Purple vertical line
  & ::after {
    position: absolute;
    display: block;
    content: '';
    width: 50%;
    left: 25%;
    padding-top: .6em;
    border-bottom: 2px solid ${theme.fg.links};
  }
`

export const Post = styled.div`
  padding-bottom: .25em;
`

export const PostTitle = styled.div`
  font-size: ${theme.font.Size_0};
  font-family: ${theme.font.Heading};
`

export const PostInfo = styled.div`
  font-size: ${theme.font.Size_0};
  font-family: ${theme.font.body};
  color: ${hexa(theme.fg.blueishGray, .4)};
`

export const ContactField = styled.p`
  font-family: ${theme.font.mono};
  font-size: ${theme.font.Size_0};
  margin: 0;
  margin-bottom: .5em;
`

export const Line = styled.hr`
  background-color: ${theme.fg.blueishGray};
`

export const CopyRight = styled.div`
  width: 100%;
  background-color: ${theme.bg.footer};
  color: ${theme.fg.blueishGray};
  font-family: ${theme.font.mono};
  display: flex;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
`

export const Heart = styled.span`
  font-size: ${theme.font.Size_4};
  margin: -10px .5rem 0 .5rem;
  color: ${theme.fg.links};
`

export const ScrollTop = styled.div`
  background-color: ${theme.fg.accent};
  color: ${theme.bg.primary};
  width: 2.5rem;
  height: 2.9rem;
  position: absolute;
  right: 20%;
  top: -1.5rem;

  ${down(Breakpoints.small)} {
    top: -3rem;
  }

  border-radius: ${theme.ctaRadius};

  /* Center Text */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.font.Size_4};

  cursor: pointer;

  /* Animate */
  transition: .5s;
  &:hover{
    transform: translateY(-10px);
  }
`