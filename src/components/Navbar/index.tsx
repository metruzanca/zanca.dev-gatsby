import React from "react"
import Image, { FixedObject } from "gatsby-image"

import {
  Nav,
  Li,
  Ul,
  NavLink as Link,
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
}

const Navigation: React.FC<Props> = ({
  sections,
  social,
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
              <Link to={path}>
                <span>{name}</span>
              </Link>
            </Li>
          ))}
        </Ul>
      </NavNav>
      <NavSocial>
        <Ul>
          {social.map(({name, url, icon}, key: number) => (
            <Li key={key}>
              <Link to={url} target={'_blank'} >
                <Image fixed={icon}/>
              </Link>
            </Li>
          ))}
        </Ul>
      </NavSocial>
    </Nav>
  )
}

export default Navigation;