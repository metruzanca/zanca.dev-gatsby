import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../../style';

export const Wrapper = styled.div`
  display:flex;
`

export const CompanyLI = styled.li`
  white-space: nowrap;
  list-style: none;
  font-family: ${theme.font.mono};
`

export const H3 = styled.h3`
  white-space: nowrap;
  margin-top: 0;
`

export const H6 = styled.h6`
  margin-top: 1rem;
`

export const BulletLI = styled.li`
  list-style: none;
  position: relative;
  padding-left: 30px;

  ::before{
    content: "▹";
    font-size: ${theme.font.Size_2};
    position: absolute;
    left: 0;
    top: -4px;
    color: ${theme.fg.accent};
  }
`

export const Orgs = styled.nav`
  margin-left: 10px;
`

export const Experiences = styled.section`
  margin-left: 30px;
`

interface PureCSSStyleProps { tabCount: number }
export const PureCSSStyle = createGlobalStyle<PureCSSStyleProps>`
  #experience input,
  #experience section > div {
    display: none;
  }

  ${props => selectCheckedTabSection(props.tabCount)} {
    display: block;
  }

  ${props => selectCheckedTabLabel(props.tabCount)} {
    color: ${theme.fg.accent};
  }
`;

function selectCheckedTabSection(experiences:number){
  let str = ''
  for (let i = 0; i < experiences; i++) {
    str += `#tab${i}:checked ~ section .tab${i}`
    if(i+1 !== experiences) str+= ','
  }
  return str
}

function selectCheckedTabLabel(experiences:number){
  let str = ''
  for (let i = 0; i < experiences; i++) {
    str += `#tab${i}:checked ~ nav .tab${i}`
    if(i+1 !== experiences) str+= ','
  }
  return str
}