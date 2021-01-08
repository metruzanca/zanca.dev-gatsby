import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import {
  SocialLi,
  Ul,
} from './styles'

// FIXME Re-export icons to be correct color
const SocialIcons: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SocialIconQuery {
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
      url: '/resume.pdf',
      icon: data?.resume?.childImageSharp?.fixed,
    },
  ]

  return (
    <Ul>
      {social.map(({name, url, icon}, key: number) => (
        <SocialLi key={key}>
          <a href={url} target={'_blank'} >
            <Image alt={name} fixed={icon}/>
          </a>
        </SocialLi>
      ))}
    </Ul>
  )
}

export default SocialIcons;