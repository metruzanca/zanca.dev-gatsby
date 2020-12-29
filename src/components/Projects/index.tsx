import React from "react"

import {Observed} from "../ObservedSection"
import Section from '../Section'

import {Grid, Item} from './styles'

interface Props {
  projects:[]
}

const Projects: React.FC<Props> = ({
  projects
}) => {

  return (
    <Section title={"Projects"}>
      <Grid>
        <Item>dwadawd</Item>
        <Item>dwadawd</Item>
        <Item>dwadawd</Item>
        <Item>dwadawd</Item>
        <Item>dwadawd</Item>
        <Item>dwadawd</Item>
        <Item>dwadawd</Item>
      </Grid>
    </Section>
  )
}

export default Observed(Projects);
