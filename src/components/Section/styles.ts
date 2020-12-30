import styled, { css } from "styled-components";
import { theme } from "../../style";

export const SectionWrapper = styled.section`
  /* TODO This won't do it for mobile responsive. Must lookup how to make responsive hero section */
  margin: 0 auto;
  max-width: 70vw;
`

interface HeadingProps {
  alt?:boolean
}

const headingLine = css`
  &::after{
    display: block;
    content:'';
    width: 2.5em;
    margin:20px 0 ;
    border-bottom: 5px solid ${theme.fg.links};
  }
`

export const Heading = styled.h2<HeadingProps>`
  color: ${theme.fg.links};
  ${props => !props.alt && headingLine}
`