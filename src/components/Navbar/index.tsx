import React from "react"
import Image, { FixedObject } from "gatsby-image"



import {
  Nav,
  Li,
  Ul,
  NavLink as Link,
  HighlightedNavLink as HighlightedLink,
  NavLogo,
  NavSocial,
  NavNav,
} from './styles'

// TODO itemProp for Link and span
// Are they just an accessibility thing or are they specific to Gatsby?

interface Props {
  sections: {
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
  sections,
  social,
  setHighlight,
  highlight,
}) => {

  return (
    <Nav>
      <NavLogo>
        <Link to="/"><span className='highlight'>{'Z'}</span>{'Best.Dev'}</Link>
      </NavLogo>
      <NavNav>
        <Ul>
          {sections.map(({name, path}, key: number) => (
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