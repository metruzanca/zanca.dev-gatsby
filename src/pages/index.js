import React, { useState } from "react"
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
    props:{
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

const LandingPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query SpaQuery {
      site {
        siteMetadata {
          title
        }
      }
      github: file(absolutePath: { regex: "/github.png/" }) {
        childImageSharp {
          fixed(width: 30, height: 30, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(absolutePath: { regex: "/linkedin.png/" }) {
        childImageSharp {
          fixed(width: 30, height: 30, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      resume: file(absolutePath: { regex: "/pdf.png/" }) {
        childImageSharp {
          fixed(width: 30, height: 30, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  //TODO Move to gatsby-config site meta data, and modify the query above to include the info stored in the side meta
  const social = [
    {
      name: 'Github',
      url: 'https://github.com/metruzanca',
      icon: data?.github?.childImageSharp?.fixed,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/samuelz/',
      icon: data?.linkedin?.childImageSharp?.fixed,
    },
    {
      name: 'Resume',
      url: '/resume.pdf',
      icon: data?.resume?.childImageSharp?.fixed,
    },
  ]

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

  return (
    <div style={{scrollBehavior:'smooth'}}>
      <SEO title="ZBest.Dev - Samuel's Blog and Portfolio" />
      <SpaNav
        scrollableSections={scrollableSections}
        additionalSections={additionalSections}
        social={social}
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
    </div>
  )
}

export default LandingPage
