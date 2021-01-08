import React, { useState, Fragment, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import SpaNav from "../components/Navbar"

import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"

import { jump } from '../utils'

const scrollableSections = [
  {
    name:"Home",
    path:"#home",
    Component: Hero,
    props: {
      name: "Samuele",
      title: "Full-Stack Developer",
      paragraph: "I build Bespoke webapps using React and Nodejs for Individuals and Businesses",
    }
  },
  {
    name:"Projects",
    path:"#projects",
    Component: Projects,
  },
  {
    name:"About",
    path:"#about",
    Component: About,
    props: {
      summary: "",
      skills:[],
    }
  },
  {
    name:"Contact",
    path:"#contact",
    Component: Contact,
  }
]

const additionalSections = [
  {
    name:"Blog",
    path:"/blog",
  },
]

const LandingPage = ({ location, test }) => {
  console.log(test)
  const data = useStaticQuery(graphql`
    query SpaQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [highlight, setHighlight] = useState(0)

  //FIXME Refactor the way this useState's props get passed down.
  const [isObserving, setIsObserving] = useState(false)

  function scrollToSection(key, path){
    setHighlight(key)
    setIsObserving(false)
    jump(path, () => setIsObserving(true))
  }

  function handleInView(key, path){
    setHighlight(key)
    // TODO find a way to do this with gatsby's router
    window.history.pushState({}, window.title, path);
  }

  useEffect(() => {
    if(location.hash){
      const key = scrollableSections.findIndex( route => route.path === location.hash)
      scrollToSection(key, location.hash)
    }
  }, [])

  return (
    <Fragment>
      <SEO title="ZBest.Dev - Samuel's Blog and Portfolio" />
      <SpaNav
        scrollableSections={scrollableSections}
        additionalSections={additionalSections}
        setHighlight={setHighlight}
        highlight={highlight}
        scrollToSection={scrollToSection}
      />
      {scrollableSections
        .map(({Component, path, props}, key) => (
          <Component
            handleInView={()=> handleInView(key, path)}
            scrollId={path.substr(1)}
            isObserving={isObserving}
            {...props}
          />
        ))
      }
      <footer>
        I am Footer
      </footer>
    </Fragment>
  )
}

export default LandingPage
