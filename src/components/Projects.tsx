import _ from 'lodash'
import React from 'react'
import styled from 'react-emotion'
import { FaCode, FaGithub, FaInfoCircle } from 'react-icons/fa'
import { Tags } from './Tags'

const StyledLink = styled.a`
  font-size: 0.9em;
`

export interface IProject {
  title: string
  description?: string
  link?: string
  github?: string
  tags?: string[]
}

export const Projects: React.SFC<{ projects: { [key: string]: IProject } }> = ({
  projects
}) => (
  <React.Fragment>
    {_.map(projects, (project: IProject, key: string) => (
      <React.Fragment key={key}>
        <h5>
          <FaCode /> {project.title}{' '}
          {project.github && (
            <StyledLink href={project.github} target="_blank">
              <FaGithub />
            </StyledLink>
          )}{' '}
          {project.link && (
            <StyledLink href={project.link} target="_blank">
              <FaInfoCircle />
            </StyledLink>
          )}
        </h5>
        {project.tags && <Tags tags={project.tags} />}
        <span>{project.description}</span>
      </React.Fragment>
    ))}
  </React.Fragment>
)
