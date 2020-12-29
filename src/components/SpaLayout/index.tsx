import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SpaNav from "../../components/Navbar"

// TODO move this to somewhere else
const sections = [
  {
    name:"Home",
    path:"#home"
  },
  {
    name:"Portfolio",
    path:"#portfolio"
  },
  {
    name:"Services",
    path:"#services"
  },
  {
    name:"About",
    path:"#about"
  },
  {
    name:"Contact",
    path:"#contact"
  },
  {
    name:"Blog",
    path:"/blog"
  },
]

const SpaLayout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SocialImages {
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
    icon: null
  },
]



  return (
    <div className="global-wrapper">
      <SpaNav sections={sections} social={social}/>
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default SpaLayout
