import React from "react"

import {Observed} from "../ObservedSection"
import Section from '../Section'

import {Skills} from './components'
import {Grid, Summary} from './styles'

interface Props {
}

const About: React.FC<Props> = ({
}) => {

  return (
    <Section title={"About"}>
      <Grid>
        <Summary>
          Professional Summary etc etc etc Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ad provident optio vel distinctio ipsam illo eius suscipit odit, quia officiis veniam rem quos est, obcaecati voluptas, soluta natus expedita!
        </Summary>
        <Skills skills={["Nodejs", "React", "javascript", "Typescript"]}/>
      </Grid>
    </Section>
  )
}

export default Observed(About);
