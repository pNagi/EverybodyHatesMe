import _ from 'lodash'
import React from 'react'
import styled from 'react-emotion'
import { IconType } from 'react-icons'
import { colors } from '../styles'
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
  align-items: center;
  color: ${colors.gray.z8};

  > * {
    margin-right: 1em;
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
        <React.Fragment key={key}>
          <IconComponent />
          <div>{text}</div>
        </React.Fragment>
      ))}
    </StyledContacts>
  </StyledHeader>
)
