import React from "react"

import {Highlight} from '../../style'
import SocialIcons from './SocialIcon'
import {
  NavWrapper,
  NavLogo,
  Nav,
  Spacer,
  NavSocial,
  Ul,
  LinkLi,
  // NavLink,
  // HighlightedNavLink,
  AnchorLink,
  HighlightedAnchorLink,
} from './styles'

// TODO itemProp for Link and span
// Are they just an accessibility thing or are they specific to Gatsby?

export type ScrollableSections = {
  name: string
  path: string
}[]

export type AdditionalSections = {
  name: string
  path: string
}[]

interface Props {
  scrollableSections: ScrollableSections
  additionalSections: AdditionalSections
  highlight:number
  scrollToSection?: Function
}


const Navigation: React.FC<Props> = ({
  scrollableSections,
  additionalSections,
  highlight,
  scrollToSection,
}) => {
  const CSRLandingPage = typeof window !== `undefined` && window.isBrowserWithJavascript

  return (
    <NavWrapper>
      <NavLogo>
        <AnchorLink href="/"><Highlight>{'Z'}</Highlight>{'Best.Dev'}</AnchorLink>
      </NavLogo>
      <Nav>
        <Ul>
          {CSRLandingPage && scrollToSection !== undefined ? 
            scrollableSections.map(({name, path}, key: number) => (
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
            ))
           : scrollableSections.map(({name, path}, key: number) => (
              <LinkLi key={key}>
                {highlight == key ? (
                  <HighlightedAnchorLink href={path}>
                    <span>{name}</span>
                  </HighlightedAnchorLink>
                ) : (
                  <AnchorLink href={path}>
                    <span>{name}</span>
                  </AnchorLink>
                )}
              </LinkLi>
            ))
          }
          <Spacer>|</Spacer>
          {additionalSections.map(({name, path}, key: number) => (
            <LinkLi key={key}>
              {highlight == key + scrollableSections.length ? (
                <HighlightedAnchorLink href={path}>
                  <span>{name}</span>
                </HighlightedAnchorLink>
              ) : (
                <AnchorLink href={path}>
                  <span>{name}</span>
                </AnchorLink>
              )}
            </LinkLi>
          ))}
        </Ul>
      </Nav>
      <NavSocial>
          <SocialIcons/>
      </NavSocial>
    </NavWrapper>
  )
}

export default Navigation;