import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Hero from "../components/Hero"
import SpaNav from "../components/Navbar"

const sections = [
  {
    name:"Home",
    path:"#home",
    Component: Hero,
  },
  {
    name:"Portfolio",
    path:"#portfolio",
    Component: Hero,
  },
  {
    name:"Services",
    path:"#services",
    Component: Hero,
  },
  {
    name:"About",
    path:"#about",
    Component: Hero,
  },
  {
    name:"Contact",
    path:"#contact",
    Component: Hero,
  },
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
      <SpaNav sections={sections} social={social} setHighlight={setHighlight} highlight={highlight}/>
      {sections
        .filter(({Component}) => Component !== undefined)
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
