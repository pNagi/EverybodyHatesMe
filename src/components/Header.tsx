import _ from 'lodash'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'react-emotion'
import { IconType } from 'react-icons'
import { breakpoints, colors } from '../styles'
import { getEmSize } from '../styles/mixins'
export interface IContact {
  IconComponent: IconType
  text: string
  link?: string
  ActionIconComponent?: IconType
  tip?: string
}

const StyledContacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: ${getEmSize(breakpoints.mobile)}em) {
    flex-direction: column;
  }
`

const StyledContact = styled.div<{ copyable: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 -${getEmSize(5)}em;
  padding: ${getEmSize(5)}em;
  color: ${colors.ivory.z8};
  letter-spacing: ${getEmSize(1)}em;
  user-select: ${props => (props.copyable ? 'all' : 'none')};

  &:hover {
    background: ${colors.ivory.z2};
    color: ${colors.ivory.z9};
  }

  &:not(:hover):not(:last-child):after {
    content: '·';
    position: absolute;
    right: 0.5em;
  }

  &:not(:hover) > *:nth-child(3) {
    visibility: hidden;
  }

  > *:not(:last-child) {
    margin-right: 0.5em;
  }

  @media (min-width: ${getEmSize(breakpoints.mobile)}em) {
    margin-right: 0.5em;
  }
`

const StyledTip = styled.div`
  color: ${colors.ivory.z8};
  font-size: 0.75em;
`

export const Header: React.SFC<{
  firstName: string
  lastName: string
  contacts: { [key: string]: IContact }
}> = ({ firstName, lastName, contacts }) => (
  <React.Fragment>
    <div>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
    </div>
    <StyledContacts>
      {_.map(
        contacts,
        (
          { IconComponent, text, link, ActionIconComponent, tip }: IContact,
          key: string
        ) => {
          const copyable = key === 'email'
          const content = (
            <StyledContact key={key} copyable={copyable}>
              <IconComponent />
              <div>{text}</div>
              {ActionIconComponent ? (
                <ActionIconComponent />
              ) : tip ? (
                <StyledTip>{tip}</StyledTip>
              ) : null}
            </StyledContact>
          )

          if (link) {
            return (
              <a href={link} target="_blank">
                {content}
              </a>
            )
          }
          if (copyable) {
            return <CopyToClipboard text={text}>{content}</CopyToClipboard>
          }

          return content
        }
      )}
    </StyledContacts>
  </React.Fragment>
)
