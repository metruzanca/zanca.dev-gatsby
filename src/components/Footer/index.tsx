import React from "react"

import {
  CopyRight,
  FooterWrapper,
  Heart,
  ScrollTop,
  RotatedText,
  FooterInfo,
  RotatedTextContainer,
  ContactField,
  Line,
  Post,
  PostTitle,
  PostInfo,
} from './styles'

import FooterSection from './components/FooterSection'
import AntiSpamField from "../AntiSpamField"
import { Link } from "gatsby"

const Field:React.FC = ({children}) => (
  <ContactField>
    <AntiSpamField>
      {children}
    </AntiSpamField>
  </ContactField>
)

// From blog.tsx
// TODO Fix duplication
type BlogPosts = [{
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

interface Props {
  scroll: () => void
  posts: BlogPosts
}

const Footer: React.FC<Props> = ({
  scroll,
  posts,
}) => {

  return (
    <FooterWrapper>
      <FooterInfo>
        <RotatedTextContainer>
          <RotatedText>
            ZANCA
          </RotatedText>
        </RotatedTextContainer>
        <FooterSection header={'Latest Blog Posts'}>
          {posts.slice(0,2).map((post, key) => (
            <Post key={key}>
              <PostTitle>
                <Link to={`/blog` + post.fields.slug} itemProp="url">
                  <span itemProp="headline">{post.frontmatter.title}</span>
                </Link>
              </PostTitle>
              {/* <PostInfo>
                {post.frontmatter.date}
                {' - '}
                {post.fields.readingTime.text} 
              </PostInfo> */}
            </Post>
          ))}
        </FooterSection>
        {/* 
          TODO Make this Subscribe / Contact ->
          Make contact me section for business inquries
          This is should be for collecting emails to build an audience.
        */}
        <FooterSection header={'Contact'}>
          {/* TODO Add icons for email and phone */}
          <Field>
            EMAIL: <a href="mailto:samuele@zanca.dev">samuele@zanca.dev</a>
          </Field>
          <Field>
            PHONE: +1 201-706-7528
          </Field>
          {/* <Line /> */}
        </FooterSection>
      </FooterInfo>
      <CopyRight>
        Made with <Heart>♥</Heart> by Samuele Zanca
        <a href="#home">
          <ScrollTop onClick={scroll}>
            ▲
          </ScrollTop>
        </a>
      </CopyRight>
    </FooterWrapper>
  )
}

export default Footer;