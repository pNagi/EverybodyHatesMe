import _ from 'lodash'
import { IconType } from 'react-icons'

import React from 'react'
import styled from 'react-emotion'

export interface IContact {
  IconComponent: IconType
  text: string
}

const StyledContact = styled.h5`
  margin-top: 1em;
  letter-spacing: 5px;
`

export const Header: React.SFC<{
  firstName: string
  lastName: string
  contacts: { [key: string]: IContact }
}> = ({ firstName, lastName, contacts }) => (
  <React.Fragment>
    <h1>{firstName}</h1>
    <h2>{lastName}</h2>
    {_.map(contacts, ({ IconComponent, text }: IContact, key: string) => (
      <StyledContact key={key}>
        <IconComponent /> {text}
      </StyledContact>
    ))}
  </React.Fragment>
)
