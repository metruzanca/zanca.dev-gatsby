import React, { useState, useEffect, useRef } from 'react';
// import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from '../style'
import { Menu } from '../components/Menu'

const Mobile = ({}) => {


  return (
    <>
      <GlobalStyle/>
      <h1>Fuck you</h1>
      <div style={{display: "flex", justifyContent:"end"}}>
        <Menu/>
      </div>
    </>
  )
}

export default Mobile













