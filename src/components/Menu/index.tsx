// This component was based on Brittany Chiang's menu in her...
// ...own portfolio https://github.com/bchiang7/v4 licensed as MIT.
// I merely reworked it to fit my setup and be more modular.
// Full credit goes to her for its implementation.

// BrittanyChiangInnerBox is named that way as the asymmetric lines were her idea,
// however, this component also has InnorBox which is a classic hamburger menu design.

import React, { useState, useRef, useEffect } from "react"
// import { Link } from "gatsby"

import {
  Wrapper,
  HamburgerButton,
  Sidebar,
  HamburgerBox,
  BrittanyChiangInnerBox,
  ResumeLink,
  Nav,
  Link,
} from "./styles"

import { useOnClickOutside } from "../../hooks"
import {config} from '../../utils'
import { useTabNavigation, keyCodes } from "../../hooks/useTabNavigation"

import {Helmet} from 'react-helmet'

const navigation = [
  ...config.navigation.home,
  ...config.navigation.blog
]

// This component does NOT have a no-js default
// the percentage of people viewing my site on mobile AND without js is very low.
// Oods are they are on the blog section anyways
export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const modalRef = useRef(null)
  useOnClickOutside(modalRef, () => setMenuOpen(false))

  const hamburgerButtonRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useTabNavigation(
    () => hamburgerButtonRef.current && navRef.current ? [
        hamburgerButtonRef.current,
        ...Array.from(navRef.current.querySelectorAll('a'))
      ] : [],
    {
      [keyCodes.ESCAPE]: () => setMenuOpen(false)
    }
  )
  
  useEffect(() => {
    function handleResize(e) {
      if (e.currentTarget.innerWidth > 768) {
        setMenuOpen(false)
      }      
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Wrapper menuOpen={menuOpen}>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''}/>
      </Helmet>

      <div ref={modalRef}>
        <HamburgerButton onClick={() => setMenuOpen(!menuOpen)} ref={hamburgerButtonRef}>
          <HamburgerBox>
            <BrittanyChiangInnerBox menuOpen={menuOpen}/>
          </HamburgerBox>
        </HamburgerButton>

        <Sidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <Nav ref={navRef}>
            {navigation.map(({ path, name }, i) => (
              <div key={i}>
                <Link to={path} onClick={() => setMenuOpen(false)}>{name}</Link>
              </div>
            ))}

            <ResumeLink to="/resume.pdf">
              Resume
            </ResumeLink>
          </Nav>
        </Sidebar>
      </div>
    </Wrapper>
  )
}