import styled from "styled-components";
import { theme } from "../../style";

export const SectionWrapper = styled.section`
  /* TODO This won't do it for mobile responsive. Must lookup how to make responsive hero section */
  margin: 0 auto;
  max-width: 70vw;
`

export const Heading = styled.h2`
  color:${theme.fg.links};
  &::after{
    display: block;
    content:'';
    width: 2.5em;
    margin:20px 0 ;
    border-bottom: 5px solid ${theme.fg.links};
  }
`