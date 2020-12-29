import React from "react"
import Image, { FixedObject } from "gatsby-image"

import {Highlight} from '../../style'

import {
  Nav,
  Li,
  Ul,
  NavLink as Link,
  HighlightedNavLink as HighlightedLink,
  NavLogo,
  NavSocial,
  NavNav,
  Spacer
} from './styles'

// TODO itemProp for Link and span
// Are they just an accessibility thing or are they specific to Gatsby?

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
    icon: FixedObject
  }[]
  setHighlight:(index:number)=>void
  highlight:number
}

const Navigation: React.FC<Props> = ({
  scrollableSections,
  additionalSections,
  social,
  setHighlight,
  highlight,
}) => {

  return (
    <Nav>
      <NavLogo>
        <Link to="/"><Highlight>{'Z'}</Highlight>{'Best.Dev'}</Link>
      </NavLogo>
      <NavNav>
        <Ul>
          {scrollableSections.map(({name, path}, key: number) => (
            <Li key={key}>
              {highlight == key ? (
                <HighlightedLink to={path} onClick={() => setHighlight(key)}>
                  <span>{name}</span>
                </HighlightedLink>
              ) : (
                <Link to={path} onClick={() => setHighlight(key)}>
                  <span>{name}</span>
                </Link>
              )}
            </Li>
          ))}
          <Spacer>|</Spacer>
          {additionalSections.map(({name, path}, key: number) => (
            <Li key={key}>
              {/* {highlight == key ? (
                <HighlightedLink to={path} onClick={() => setHighlight(key)}>
                  <span>{name}</span>
                </HighlightedLink>
              ) : ( */}
                <Link to={path} onClick={() => setHighlight(key)}>
                  <span>{name}</span>
                </Link>
              {/* )} */}
            </Li>
            
          ))}
        </Ul>
      </NavNav>
      <NavSocial>
        <Ul>
          {social.map(({name, url, icon}, key: number) => (
            <Li key={key}>
              <a href={url} target={'_blank'} >
                <Image alt={name} fixed={icon}/>
              </a>
            </Li>
          ))}
        </Ul>
      </NavSocial>
    </Nav>
  )
}

export default Navigation;