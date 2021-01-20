import React from "react"

import { SectionWrapper, Heading } from './styles'

interface Props {
  title: string
  alt?: boolean
  id?: string
}

const Section: React.FC<Props> = ({
  title,
  children,
  alt = false,
  id,
}) => {

  return (
    <SectionWrapper id={id}>
      <Heading alternate={alt}>{title}</Heading>
      <div>
        {children}
      </div>
    </SectionWrapper>
  )
}

export default Section;
