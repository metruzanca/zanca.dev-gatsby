import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/BlogLayout"
import SEO from "../components/seo"
import Bio from "../components/bio"

interface DataProps {
  allMarkdownRemark: {
    nodes: [{
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        date: string
        title: string 
        description: string
      }
    }]
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => {
    const posts = data.allMarkdownRemark.nodes
  return (
    <Layout title="Blog" location={location}>
      <SEO title="Blog" />
      <Bio />
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={`/blog` + post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
    </Layout>
  )
}

export default UsingTypescript

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`