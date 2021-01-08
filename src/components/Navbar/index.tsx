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
  NavLink,
  HighlightedNavLink,
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
  // setHighlight:(index:number)=>void
  highlight:number
  scrollToSection?: Function
}

const isBrowser = typeof window !== 'undefined'

const Navigation: React.FC<Props> = ({
  scrollableSections,
  additionalSections,
  // setHighlight,
  highlight,
  scrollToSection = null,
}) => {

  return (
    <NavWrapper>
      <NavLogo>
        <NavLink to="/"><Highlight>{'Z'}</Highlight>{'Best.Dev'}</NavLink>
      </NavLogo>
      <Nav>
        <Ul>
          {!isBrowser || scrollToSection === null && scrollableSections.map(({name, path}, key: number) => (
            <LinkLi key={key}>
              {highlight == key ? (
                <HighlightedNavLink to={path}>
                  <span>{name}</span>
                </HighlightedNavLink>
              ) : (
                <NavLink to={path}>
                  <span>{name}</span>
                </NavLink>
              )}
            </LinkLi>
          ))}
          {scrollToSection !== null && scrollableSections.map(({name, path}, key: number) => (
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
                <HighlightedNavLink to={path}>
                  <span>{name}</span>
                </HighlightedNavLink>
              ) : (
                <NavLink to={path}>
                  <span>{name}</span>
                </NavLink>
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