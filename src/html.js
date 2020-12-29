import React from "react"
import PropTypes from "prop-types"

// TODO figure out how to import theme into here
// import theme from 'style/theme'

const theme = {
  bg:{
    primary:'#2f324c',
    secondary:'#393b54',
  },
  fg:{
    primary:'#ffffff',
    accent:'#f7e13a',
  }
}

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} style={{scrollBehavior:'smooth'}}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} style={{backgroundColor: theme.bg.primary}}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
