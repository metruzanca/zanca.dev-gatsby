import React from "react"
import { Link } from "gatsby";

import {Highlight} from '../../style'
import {Observed} from "../ObservedSection"
import ScrollIndicator from "../ScrollIndicator"

import {HeroSection, HeroHeading, HeroParagraph, CallToAction} from './styles'


interface Props {
  name:string
  title:string
  paragraph:string
}

const Hero: React.FC<Props> = ({
  name,
  title,
  paragraph,
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
        <Link to="#projects">
          <CallToAction>
            Previous Work
          </CallToAction>
        </Link>
        <ScrollIndicator href="#projects" onClick={()=> console.log("scroll clicked")}/>
      </HeroSection>
  )
}

export default Observed(Hero);
