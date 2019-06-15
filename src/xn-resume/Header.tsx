import styled from "@emotion/styled"
import _ from "lodash"
import React from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { IconType } from "react-icons"
import { breakpoints, colors } from "../styles"
import { getEmSize } from "../styles/mixins"
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

const StyledContact = styled.div<{ copyable?: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 -${getEmSize(5)}em;
  padding: ${getEmSize(5)}em;
  color: ${colors.ivory.z8};
  letter-spacing: ${getEmSize(1)}em;
  user-select: ${props => (props.copyable ? "all" : "auto")};

  &:hover {
    background: ${colors.ivory.z2};
    color: ${colors.ivory.z9};
  }

  &:not(:hover):not(:last-child):after {
    content: "·";
    position: absolute;
    right: 0.5em;
  }

  &:not(:hover) > *:nth-of-type(3) {
    visibility: hidden;
  }

  > *:not(:last-child) {
    margin-right: 0.5em;
  }

  @media (min-width: ${getEmSize(breakpoints.mobile)}em) {
    margin-right: 0.5em;
  }
`

const StyledContactLink = styled.a`
  &:not(:hover):not(:last-child) > *:after {
    content: "·";
    position: absolute;
    right: 0.5em;
  }
`

const StyledTip = styled.div`
  color: ${colors.ivory.z8};
  font-size: 0.75em;
`

const StyledTooltip = styled.div<{ visible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 0 ${getEmSize(5)}em;
  transform: ${props =>
    props.visible ? "translate(-50%, 100%)" : "translate(-50%, 50%)"};
  transition: all 0.2s;
  transition-delay: 0.2s;
  border-radius: ${getEmSize(2)}em;
  opacity: ${props => (props.visible ? 1 : 0)};
  background: ${colors.ivory.z8};
  color: ${colors.ivory.z1};
  font-size: 0.75em;
  user-select: none;
`

interface IHeaderProps {
  firstName: string
  lastName: string
  contacts: { [key: string]: IContact }
}

interface IHeaderState {
  [key: string]: { copied: boolean }
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props)
    this.state = {}
  }

  public getOnCopy = (key: string) => () => {
    this.setState({ [key]: { copied: true } })
  }

  public getOnBlur = (key: string) => () => {
    this.setState({ [key]: { copied: false } })
  }

  public renderContact = (
    { IconComponent, text, link, ActionIconComponent, tip }: IContact,
    key: string
  ) => {
    const copyable = key === "email"
    const content = (
      <StyledContact
        key={key}
        copyable={copyable}
        onMouseLeave={this.getOnBlur(key)}
      >
        <IconComponent />
        <div>
          {text}
          {this.renderTooltip(key)}
        </div>
        {ActionIconComponent ? (
          <ActionIconComponent />
        ) : tip ? (
          <StyledTip>{tip}</StyledTip>
        ) : null}
      </StyledContact>
    )

    if (link) {
      return (
        <StyledContactLink key={key} href={link} target="_blank">
          {content}
        </StyledContactLink>
      )
    }
    if (copyable) {
      return (
        <CopyToClipboard key={key} text={text} onCopy={this.getOnCopy(key)}>
          {content}
        </CopyToClipboard>
      )
    }

    return content
  }

  public renderTooltip = (key: string) => (
    <StyledTooltip visible={this.state[key] && this.state[key].copied}>
      Copied
    </StyledTooltip>
  )

  public render() {
    return (
      <React.Fragment>
        <div>
          <h1>{this.props.firstName}</h1>
          <h2>{this.props.lastName}</h2>
        </div>
        <StyledContacts>
          {_.map(this.props.contacts, this.renderContact)}
        </StyledContacts>
      </React.Fragment>
    )
  }
}
