import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import SpaNav from "../components/Navbar"

import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"

const scrollableSections = [
  {
    name:"Home",
    path:"#home",
    Component: Hero,
  },
  {
    name:"Projects",
    path:"#projects",
    Component: Projects,
  },
  // {
  //   name:"Services",
  //   path:"#services",
  //   Component: Projects,
  // },
  {
    name:"About",
    path:"#about",
    Component: About,
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

const BlogIndex = ({ location }) => {
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
      url: '#THIS-DOES-NOT-WORK-YET', // TODO Resume link
      icon: data?.resume?.childImageSharp?.fixed,
    },
  ]

  const [highlight, setHighlight] = useState(0)

    useEffect(() => {
      console.log(highlight);
    }, [highlight])

  return (
    <div>
      <SEO title="ZBest.Dev - Samuel's Blog and Portfolio" />
      <SpaNav
        scrollableSections={scrollableSections}
        additionalSections={additionalSections}
        social={social}
        setHighlight={setHighlight}
        highlight={highlight}
      />
      {scrollableSections
        .map(({Component, path}, key) => (
          <Component 
            setHighlight={()=> setHighlight(key)}
            scrollId={path.substr(1)}
          />
        ))
      }
      <footer>
        I am Footer
      </footer>
    </div>
  )
}

export default BlogIndex
