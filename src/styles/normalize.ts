import { injectGlobal } from 'emotion'
import { colors, dimensions, fonts } from './variables'

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
    background-color: ${colors.gray.z1};
    color: ${colors.gray.z8};
    font-family: ${fonts.body};
  }

  h1, h2, h3, h4, h5, h6 {
    display: block;
    margin: 1.414rem 0.25rem 0.25rem 0;
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
    font-size: 3.6rem;
    letter-spacing: 10px;
  }
  h2 {
    font-size: 2.4rem;
    font-weight: 400;
    letter-spacing: 10px;
  }
  h3 {
    font-size: 1.2rem;
    letter-spacing: 5px;
  }
  h4 {
    font-size: 1rem;
    letter-spacing: 2px;
  }
  h5 {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 2px;
  }
  h6 {
    color: ${colors.ivory.z5};
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 3px;
  }

  a {
    color: ${colors.ivory.z9};
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${colors.ivory.z6};
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`
