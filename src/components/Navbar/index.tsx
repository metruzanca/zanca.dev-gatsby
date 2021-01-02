import React from "react"
import Image, { FixedObject } from "gatsby-image"

import { jump } from '../../utils'
import {Highlight} from '../../style'

import {
  NavWrapper,
  NavLogo,
  Nav,
  Spacer,
  NavSocial,
  Ul,
  LinkLi,
  SocialLi,
  NavLink,
  HighlightedNavLink,
  AnchorLink,
  HighlightedAnchorLink,
} from './styles'

// TODO itemProp for Link and span
// Are they just an accessibility thing or are they specific to Gatsby?

// ?.github?.childImageSharp?.fixed,

interface Props {
  scrollableSections: {
    name: string
    path: string
  }[]
  additionalSections: {
    name: string
    path: string
  }[]
  social: {
    name: string
    url: string
    icon: {
      childImageSharp: {
        fixed: FixedObject
      }
    }
  }[]
  setHighlight:(index:number)=>void
  highlight:number
  scrollToSection: Function
}

const Navigation: React.FC<Props> = ({
  scrollableSections,
  additionalSections,
  social,
  setHighlight,
  highlight,
  scrollToSection,
}) => {
  console.log(social)
  return (
    <NavWrapper>
      <NavLogo>
        <NavLink to="/"><Highlight>{'Z'}</Highlight>{'Best.Dev'}</NavLink>
      </NavLogo>
      <Nav>
        <Ul>
          {scrollableSections.map(({name, path}, key: number) => (
            <LinkLi key={key}>
              {highlight == key ? (
                <HighlightedAnchorLink onClick={() => scrollToSection(key, path)}>
                  <span>{name}</span>
                </HighlightedAnchorLink>
              ) : (
                <AnchorLink onClick={() => scrollToSection(key, path)}>
                  <span>{name}</span>
                </AnchorLink>
              )}
            </LinkLi>
          ))}
          <Spacer>|</Spacer>
          {additionalSections.map(({name, path}, key: number) => (
            <LinkLi key={key}>
              {highlight == key + scrollableSections.length ? (
                <HighlightedNavLink to={path} onClick={() => setHighlight(key)}>
                  <span>{name}</span>
                </HighlightedNavLink>
              ) : (
                <NavLink to={path} onClick={() => setHighlight(key)}>
                  <span>{name}</span>
                </NavLink>
              )}
            </LinkLi>
          ))}
        </Ul>
      </Nav>
      <NavSocial>
        <Ul>
          {/* {social.map(({name, url, icon}, key: number) => (
            <SocialLi key={key}>
              <a href={url} target={'_blank'} >
                <Image alt={name} fixed={icon}/>
              </a>
            </SocialLi>
          ))} */}
        </Ul>
      </NavSocial>
    </NavWrapper>
  )
}

export default Navigation;