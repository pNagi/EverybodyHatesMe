import _ from 'lodash'
import React from 'react'
import styled from 'react-emotion'
import { IconType } from 'react-icons'
import { breakpoints, colors } from '../styles'
import { getEmSize } from '../styles/mixins'

export interface IContact {
  IconComponent: IconType
  text: string
}

const StyledHeader = styled.div`
  padding-bottom: ${getEmSize(30)}em;
`

const StyledContacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: ${getEmSize(breakpoints.mobile)}em) {
    > * {
      margin-right: 1em;
    }
  }

  @media (max-width: ${getEmSize(breakpoints.mobile)}em) {
    flex-direction: column;
  }
`

const StyledContact = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray.z8};

  > *:first-child {
    margin-right: 0.5em;
  }
`

export const Header: React.SFC<{
  firstName: string
  lastName: string
  contacts: { [key: string]: IContact }
}> = ({ firstName, lastName, contacts }) => (
  <StyledHeader>
    <div>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
    </div>
    <StyledContacts>
      {_.map(contacts, ({ IconComponent, text }: IContact, key: string) => (
        <StyledContact key={key}>
          <IconComponent />
          <div>{text}</div>
        </StyledContact>
      ))}
    </StyledContacts>
  </StyledHeader>
)
