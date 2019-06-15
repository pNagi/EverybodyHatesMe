import * as React from "react"
import styled, { css } from "react-emotion"
import { getEmSize } from "../styles/mixins"
import { breakpoints, colors } from "../styles/variables"

const PAPER_RATIO: number = 1.414
const GOLDEN_RATIO: number = 1.61803398875

const StyledPaper = styled.div`
  display: grid;
  position: relative;
  grid-gap: 0 ${getEmSize(45)}em;
  grid-template:
    [row1-start] "header header" auto [row1-end]
    [row2-start] "primary secondary" auto [row2-end]
    [row3-start] "other secondary" 1fr [row3-end]
    / 1fr ${GOLDEN_RATIO}fr;
  width: 100vw;
  max-width: ${getEmSize(breakpoints.tabletLandscape)}em;
  height: ${PAPER_RATIO * 100}vw;
  max-height: ${PAPER_RATIO * getEmSize(breakpoints.tabletLandscape)}em;
  margin: ${getEmSize(50)}em auto;
  padding: ${getEmSize(35)}em ${getEmSize(60)}em ${getEmSize(60)}em;
  transition: box-shadow 0.5s;
  background: ${colors.white};
  box-shadow: 0 8px 20px 0 ${colors.ivory.z3};
  cursor: default;

  @media print {
    margin: 0 auto;
    box-shadow: none;
  }

  @media screen and (max-width: ${getEmSize(breakpoints.tabletLandscape)}em) {
    height: auto;
    min-height: calc(100vh - ${getEmSize(100)}em);
    max-height: none;
    box-shadow: 0 0 40px 30px ${colors.white};
  }

  @media screen and (max-width: ${getEmSize(breakpoints.tabletPortrait)}em) {
    grid-template:
      [row1-start] "header" auto [row1-end]
      [row2-start] "primary" auto [row2-end]
      [row3-start] "secondary" auto [row3-end]
      [row4-start] "other" auto [row4-end]
      / 1fr;
  }

  @media screen and (max-width: ${getEmSize(breakpoints.mobile)}em) {
    margin: 0;
    padding: ${getEmSize(15)}em;
    text-align: center;
  }
`

interface IPaperProps {
  header: React.ReactNode
  primarySections: React.ReactNode
  secondarySections: React.ReactNode
  otherSections: React.ReactNode
}

export const Paper: React.SFC<IPaperProps> = ({
  header,
  primarySections,
  secondarySections,
  otherSections
}) => (
  <StyledPaper>
    <div className={css({ gridArea: "header" })}>{header}</div>
    <div className={css({ gridArea: "primary" })}>{primarySections}</div>
    <div className={css({ gridArea: "secondary" })}>{secondarySections}</div>
    <div className={css({ gridArea: "other" })}>{otherSections}</div>
  </StyledPaper>
)
