import React from "react"

import { SectionWrapper, Heading } from './styles'

interface Props {
  title:string
  alt?:boolean
}

const Section: React.FC<Props> = ({
  title,
  children,
  alt = false,
}) => {

  return (
    <SectionWrapper>
      <Heading alt={alt}>{title}</Heading>
      <div style={{border:'1px solid lime'}}>
        {children}
      </div>
    </SectionWrapper>
  )
}

export default Section;
