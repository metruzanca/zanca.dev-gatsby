import React from "react"
import { Link } from "gatsby"

import {Wrapper} from './style'

const BlogLayout = ({ location, title, children }) => {
  //@ts-ignore Gatsby Environment Variable
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <Wrapper>
      <header className="global-header">
        {isRootPath ? (
          <h1 className="main-heading">
            <Link to="/"><span className='highlight'>{'Z'}</span>{'Best.Dev'}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            <span className='highlight'>{'Z'}</span>{'Best.Dev'}
          </Link>
        )}
      </header>
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </Wrapper>
  )
}

export default BlogLayout
