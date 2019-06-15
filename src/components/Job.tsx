import _ from "lodash"
import React from "react"
import { Group } from "./Group"
import { IProject, Projects } from "./Projects"
import { Tags } from "./Tags"

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
  <Group>
    <h4>
      {job.position}
      <a href={job.link} target="_blank">
        <span> @{job.at}</span>
      </a>
    </h4>
    <h6>{`// ${job.from} - ${job.to}`}</h6>
    {job.tags && <Tags tags={job.tags} />}
    <span>{job.description}</span>
    {job.projects && <Projects projects={job.projects} />}
  </Group>
)
