import * as React from 'react'
import styled, { css } from 'react-emotion'
import { getEmSize } from '../styles/mixins'
import { colors, widths } from '../styles/variables'

const PAPER_RATIO: number = 1.414
const GOLDEN_RATIO: number = 1.61803398875

const StyledPaper = styled.div`
  display: grid;
  position: relative;
  grid-gap: ${getEmSize(15)}em ${getEmSize(30)}em;
  grid-template:
    [row1-start] 'header header' auto [row1-end] [row2-start]
    'left-col right-col' auto [row2-end] / 1fr ${GOLDEN_RATIO}fr;
  width: 100vw;
  max-width: ${getEmSize(widths.lg)}em;
  height: ${PAPER_RATIO * 100}vw;
  max-height: ${PAPER_RATIO * getEmSize(widths.lg)}em;
  margin: ${getEmSize(50)}em auto;
  padding: ${getEmSize(15)}em ${getEmSize(30)}em;
  background: ${colors.white};
  box-shadow: 0 8px 20px 0 ${colors.ivory.z3};
  user-select: none;
`

interface IPaperProps {
  header: React.ReactNode
  leftColumn: React.ReactNode
  rightColumn: React.ReactNode
}

export const Paper: React.SFC<IPaperProps> = ({
  header,
  leftColumn,
  rightColumn
}) => (
  <StyledPaper>
    <div className={css({ gridArea: 'header' })}>{header}</div>
    <div className={css({ gridArea: 'left-col' })}>{leftColumn}</div>
    <div className={css({ gridArea: 'right-col' })}>{rightColumn}</div>
  </StyledPaper>
)
