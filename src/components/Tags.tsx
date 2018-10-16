import _ from 'lodash'

import React from 'react'
import styled from 'react-emotion'
import { getEmSize } from '../styles/mixins'
import { breakpoints, colors } from '../styles/variables'

const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5em 0;
  color: ${colors.gray.z6};
  font-size: 0.8em;

  @media (max-width: ${getEmSize(breakpoints.mobile)}em) {
    justify-content: center;
  }
`

const StyledTag = styled.div`
  margin: 0.2em 0.5em 0.2em 0;
  padding: 0 0.5em;
  background: ${colors.gray.z2};
  box-shadow: 0 1px 0 1px ${colors.ivory.z4};
  cursor: default;
`

export const Tags: React.SFC<{ tags: string[] }> = ({ tags }) => (
  <StyledTags>
    {_.map(tags, (tag: string) => (
      <StyledTag key={tag}>{tag}</StyledTag>
    ))}
  </StyledTags>
)
