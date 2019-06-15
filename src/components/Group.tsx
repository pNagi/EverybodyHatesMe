import styled from "@emotion/styled"
import _ from "lodash"
import { getEmSize } from "../styles/mixins"
import { breakpoints, colors } from "../styles/variables"

export const Group = styled.div`
  margin-left: 1px;
  padding-left: ${getEmSize(32)}em;
  border-left: 1px solid ${colors.ivory.z4};

  @media screen and (max-width: ${getEmSize(breakpoints.mobile)}em) {
    margin: ${getEmSize(30)}em 0 0;
    padding-left: 0;
    border: none;
  }
`
