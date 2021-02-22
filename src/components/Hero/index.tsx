import React from "react"

import {Highlight} from '../../style'
import {Observed} from "../ObservedSection"

import {HeroSection, HeroHeading, HeroParagraph, CallToAction} from './styles'
import ScrollIndicator from "../ScrollIndicator";


interface Props {
  name: string
  title: string
  paragraph: string
  ctaHash: string
  scroll: () => void
}

const Hero: React.FC<Props> = ({
  name,
  title,
  paragraph,
  ctaHash,
  scroll,
}) => {

  return (
      <HeroSection>
        <HeroHeading>
          Hello, I'm <Highlight>{name}</Highlight>
          <br/>
          {title}
        </HeroHeading>
        <HeroParagraph>
          {paragraph}
        </HeroParagraph>
        <a href={ctaHash} onClick={scroll}>
          <CallToAction>
            Previous Work
          </CallToAction>
        </a>
        <ScrollIndicator href={ctaHash} onClick={scroll}/>
      </HeroSection>
  )
}

export default Observed(Hero);
