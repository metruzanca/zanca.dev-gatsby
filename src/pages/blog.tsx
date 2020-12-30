import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import styled from "styled-components";

import Layout from "../components/BlogLayout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const ReadingTime = styled.small`
  margin-left: 3em;
`

interface DataProps {
  allMarkdownRemark: {
    nodes: [{
      excerpt: string
      fields: {
        slug: string
        readingTime: {
          text: string
        }
      }
      frontmatter: {
        date: string
        title: string 
        description: string
      }
    }]
  }
}

const Blog: React.FC<PageProps<DataProps>> = ({
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
                    <small>{post.frontmatter.date}</small> <ReadingTime>{post.fields.readingTime.text}</ReadingTime>
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

export default Blog

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
          readingTime {
            text    # ‘1 min read'
            # minutes # '1'
            # time    # '60000'
            # words   # 200
          }
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