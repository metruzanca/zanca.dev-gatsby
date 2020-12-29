import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import {} from './styles'

interface Props {
  skills: string[]
}

const Skills: React.FC<Props> = ({
  skills
}) => {

  return (
    <div>
      {skills.map(s => <div>{s}</div>)}
    </div>
  )
}

export default Skills;