import React from "react"

import { SectionWrapper, Heading } from './styles'

interface Props {
  title:string
}

const Section: React.FC<Props> = ({
  title,
  children,
}) => {

  return (
    <SectionWrapper>
      <Heading>{title}</Heading>
      <div style={{border:'1px solid lime'}}>
        {children}
      </div>
    </SectionWrapper>
  )
}

export default Section;
