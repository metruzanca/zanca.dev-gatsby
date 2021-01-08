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
  highlight:number
  scrollToSection?: Function
}


const Navigation: React.FC<Props> = ({
  scrollableSections,
  additionalSections,
  highlight,
  scrollToSection = undefined,
}) => {
  // const isBrowser = window.isBrowser || false

  return (
    <NavWrapper>
      <NavLogo>
        <NavLink to="/"><Highlight>{'Z'}</Highlight>{'Best.Dev'}</NavLink>
      </NavLogo>
      <Nav>
        <Ul>
          <ScrollableSections
            highlight={highlight}
            mode={getRenderingMode(scrollToSection)}
            scrollToSection={scrollToSection}
            scrollableSections={scrollableSections}
          />
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

type PreRenderBlog = {
  mode: RenderModes.pre_render_blog
  scrollableSections: ScrollableSections
  highlight: number
}

type PreRenderLanding = {
  mode: RenderModes.pre_render_landing
  scrollableSections: ScrollableSections
  highlight: number
}

type Landing = {
  mode: RenderModes.landing
  scrollableSections: ScrollableSections
  highlight: number
  scrollToSection?: Function
  // isBrowser: boolean
}

type ScrollableProps = PreRenderBlog | PreRenderLanding | Landing

enum RenderModes {
  landing = 'landing',
  pre_render_landing = 'pre_render_landing',
  pre_render_blog = 'pre_render_blog',
}

function getRenderingMode(scrollToSection){
  if(scrollToSection !== undefined){    
    return RenderModes.landing
  }
  if(scrollToSection == undefined){
    return RenderModes.pre_render_landing
  }
  return RenderModes.pre_render_blog
}

// Gatsby wasn't cooperating so I had to make this slightly over-complicated thing.
// Basically the pre-rendering wasn't rendering anything at all for ScrollableSections
// FIXME can definetly simplify with a nice if else inline, if this works in no-js
const ScrollableSections: React.FC<ScrollableProps> = (props) => {
  switch(props.mode){
    case RenderModes.landing: {
      const {
        scrollableSections,
        highlight,
        // isBrowser,
        scrollToSection,
      } = props
      return (
        <>
          {/* scrollToSection is always defined, but due to it being set as ?, this is needed */}
          {scrollToSection && scrollableSections.map(({name, path}, key: number) => (
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
        </>
      )
    }
    // pre-rendering & no-js cases 
    case RenderModes.pre_render_landing:
    case RenderModes.pre_render_blog:
    default: {
      const {
        scrollableSections,
        highlight,
      } = props      
      return (
        <>
          {scrollableSections.map(({name, path}, key: number) => (
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
        </>
      )
    }
  }
}

export default Navigation;