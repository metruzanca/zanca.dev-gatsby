import React from "react"

import {Observed} from "../ObservedSection"
import Section from '../Section'

import {Skills} from './components'
import {Grid, Summary} from './styles'

interface Props {
  summary: string
  skills: string[]
}

const About: React.FC<Props> = ({
  summary,
  skills,
}) => {

  return (
    <Section title={"About"}>
      <Grid>
        <Summary>
          {summary}
        </Summary>
        <Skills skills={skills}/>
      </Grid>
    </Section>
  )
}

export default Observed(About);
