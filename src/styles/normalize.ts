import { injectGlobal } from 'emotion'
import { getEmSize } from './mixins'
import { breakpoints, colors, dimensions, fonts } from './variables'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

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

  h1, h2, h3, h4, h5, h6 {
    display: block;
    margin: 1.414rem 0 0.25rem;
    color: ${colors.gray.z9};
    font-family: ${fonts.header};
    font-weight: 600;
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
    text-transform: uppercase;

    +h1, +h2, +h3, +h4, +h5, +h6 {
      margin-top: 0.25em;
    }
  }

  h1 {
    margin-top: 0.5rem;
    /* TODO: letter-spaceing + margin-right mixins or better solution to last letter spacing */
    margin-right: -10px;
    font-size: 3.6rem;
    letter-spacing: 10px;

    @media (max-width: ${getEmSize(breakpoints.mobile)}em) {
      font-size: 2rem;
    }
  }
  h2 {
    margin-right: -10px;
    font-size: 2.4rem;
    font-weight: 400;
    letter-spacing: 10px;

    @media (max-width: ${getEmSize(breakpoints.mobile)}em) {
      font-size: 1.2em;
    }
  }
  h3 {
    margin-right: -5px;
    font-size: 1.2rem;
    letter-spacing: 5px;

    @media (max-width: ${getEmSize(breakpoints.mobile)}em) {
      font-size: 1rem;
    }
  }
  h4 {
    margin-right: -2px;
    font-size: 1rem;
    letter-spacing: 2px;

    @media (max-width: ${getEmSize(breakpoints.mobile)}em) {
      font-size: 0.9rem;
    }
  }
  h5 {
    margin-right: -2px;
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 2px;

    @media (max-width: ${getEmSize(breakpoints.mobile)}em) {
      font-size: 0.75rem;
    }
  }
  h6 {
    margin-right: -3px;
    color: ${colors.ivory.z5};
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 3px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`
