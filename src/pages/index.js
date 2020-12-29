import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/SpaLayout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import SpaSection from "../components/SpaSection"


const BlogIndex = ({ location }) => {
  const data = useStaticQuery(graphql`
    query SpaQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="ZBest.Dev - Samuel's Blog and Portfolio" />
      <Hero />
      <SpaSection />
    </Layout>
  )
}

export default BlogIndex
