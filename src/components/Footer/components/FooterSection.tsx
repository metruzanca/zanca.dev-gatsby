import React from 'react'
import styled from 'styled-components'
import { hexa, theme } from '../../../style'

const FooterSection: React.FC<{header: string}> = ({
  header,
  children
}) => (
  <Section>
    <H5>{header}</H5>
    <Body>{children}</Body>
  </Section>
)

// TODO Responsive here
const Section = styled.section`
  margin: 0 2em;
  color: ${theme.fg.blueishGray};
`

const H5 = styled.h5`
  font-family: ${theme.font.mono};
  color: ${theme.fg.blueishGray};
  white-space: nowrap;

  position: relative;
  & ::after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    padding-top: .6em;
    border-bottom: 1px solid ${hexa(theme.fg.blueishGray, .4)};
  }
`

const Body = styled.div`

`

export default FooterSection;