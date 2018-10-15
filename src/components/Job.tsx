import _ from 'lodash'
import React from 'react'
import styled from 'react-emotion'
import { IProject, Projects } from './Projects'
import { Tags } from './Tags'

const StyledPosition = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`

export interface IJob {
  position: string
  at: string
  from: string
  to: string
  link: string
  description?: string
  projects?: { [key: string]: IProject }
  tags?: string[]
}

export const Job: React.SFC<{ job: IJob }> = ({ job }) => (
  <React.Fragment>
    <StyledPosition>
      <h4>{job.position}</h4>
      <h4>
        <a href={job.link} target="_blank">
          @{job.at}
        </a>
      </h4>
      <h6>{`// ${job.from} - ${job.to}`}</h6>
    </StyledPosition>
    {job.tags && <Tags tags={job.tags} />}
    <span>{job.description}</span>
    {job.projects && <Projects projects={job.projects} />}
  </React.Fragment>
)
