import { Global, css } from "@emotion/core"
import React from "react"
import { getEmSize, breakpoints, colors, dimensions, fonts } from "../styles"

export const Styles = () => (
  <Global
    styles={css`
      body {
        width: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        background: ${colors.gray.z1};
        color: ${colors.gray.z8};
        font-family: ${fonts.body};

        @media print {
          background: none;
        }
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        display: block;
        margin: 1.414em 0 0.25em;
        color: ${colors.gray.z9};
        font-family: ${fonts.header};
        font-weight: 600;
        line-height: ${dimensions.lineHeight.heading};
        text-rendering: optimizeLegibility;
        text-transform: uppercase;

        + h1,
        + h2,
        + h3,
        + h4,
        + h5,
        + h6 {
          margin-top: 0.25em;
        }
      }

      h1 {
        margin-top: 0.5rem;
        /* TODO: letter-spaceing + margin-right mixins or better solution to last letter spacing */
        margin-right: -${getEmSize(10)}rem;
        font-size: 3.6rem;
        letter-spacing: ${getEmSize(10)}rem;

        @media screen and (max-width: ${getEmSize(breakpoints.mobile)}em) {
          font-size: 2.4rem;
        }
      }
      h2 {
        margin-right: -${getEmSize(10)}rem;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: ${getEmSize(10)}rem;

        @media screen and (max-width: ${getEmSize(breakpoints.mobile)}em) {
          font-size: 1.2em;
        }
      }
      h3 {
        margin-right: -${getEmSize(5)}rem;
        font-size: 1.2rem;
        letter-spacing: ${getEmSize(5)}rem;
      }
      h4 {
        margin-right: -${getEmSize(2)}rem;
        font-size: 1rem;
        letter-spacing: ${getEmSize(2)}rem;
      }
      h5 {
        margin-right: -${getEmSize(2)}rem;
        font-size: 0.9rem;
        font-weight: 400;
        letter-spacing: ${getEmSize(2)}rem;
      }
      h6 {
        margin-right: -${getEmSize(3)}rem;
        color: ${colors.ivory.z6};
        font-size: 0.75rem;
        font-weight: 400;
        letter-spacing: ${getEmSize(3)}rem;
      }

      a {
        color: ${colors.ivory.z8};
        text-decoration: none;

        &:hover,
        &:focus {
          color: ${colors.ivory.z9};
        }
      }

      p {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      ::selection {
        background: ${colors.amber};
      }

      @page {
        size: A4;
        margin: 0.2in 0 0.1in;
      }
    `}
  />
)
