import React, { useState } from "react"
import { Highlight } from "../../style"

import {Observed} from "../ObservedSection"
import Section from '../Section'

import {
  PureCSSStyle,
  Wrapper,
  CompanyLI,
  H3,
  H6,
  BulletLI,
  Orgs,
  Experiences,
} from './styles'

// PureCSS Tabs inspired by https://codepen.io/renatorib/pen/rlpfj?editors=1100
// Style inspired by https://brittanychiang.com/#jobs

interface Job {
  title: string
  company: string
  start: string
  end?: string
  summary?: string
  bullets: string[]
}

interface Props {
  experience: Job[]
}

const WorkExperience: React.FC<Props> = ({
  experience
}) => {
  let companies:JSX.Element[] = []
  let jobs:JSX.Element[] = []
  let radios:JSX.Element[] = []

  const [tab, setTab] = useState(0)

  for(const [key, org] of experience.entries()){
    radios.push(
      <input
        id={`tab${key}`}
        type="radio"
        name={'tabs'}
        checked={tab === key}
        onChange={() => setTab(key)}
      />
    )

    companies.push(
      <CompanyLI className={`tab${key}`}>
        <label key={key} htmlFor={`tab${key}`}>{org.company}</label>
      </CompanyLI>
    )

    jobs.push(
      <div className={`tab${key}`}>
        <H3>{org.title} <Highlight>@ {org.company}</Highlight></H3>
        <H6>{org.start && `${org.start} - ${org.end || 'present'}`}</H6>
        {org.summary}
        <ul>
          {org.bullets.map((bullet, key) => 
            <BulletLI key={key}>{bullet}</BulletLI>
          )}
        </ul>
      </div>
    )
  }

  return (
    <Section title={"Where I've worked"} id={'experience'}>
      <Wrapper>
        <PureCSSStyle tabCount={experience.length}/>
        {radios}
        <Orgs>
          <div />
          <ul>
            {companies}
          </ul>
        </Orgs>
        <Experiences>
          {jobs}
        </Experiences>
      </Wrapper>
    </Section>
  )
}

export default Observed(WorkExperience);