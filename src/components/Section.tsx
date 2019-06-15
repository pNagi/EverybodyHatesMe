import _ from "lodash"

import React from "react"
import styled from "react-emotion"
import { IJob, Job } from "./Job"
import { IProject, Projects } from "./Projects"

const StyledSection = styled.div`
  padding-top: 1em;
`

export interface ISection {
  title: string
  description?: React.ReactNode | string
  jobs?: { [key: string]: IJob }
  projects?: { [key: string]: IProject }
}

export const Section: React.SFC<{ section: ISection }> = ({ section }) => (
  <StyledSection>
    <h3>— {section.title} —</h3>
    <span>{section.description}</span>
    {section.jobs
      ? _.map(section.jobs, (job: IJob, key: string) => (
          <Job key={key} job={job} />
        ))
      : null}
    {section.projects && <Projects projects={section.projects} />}
  </StyledSection>
)
