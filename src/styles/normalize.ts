import { injectGlobal } from "emotion"
import { dimensions } from "./variables"

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html {
    font-size: ${dimensions.fontSize.regular}px;
    line-height: ${dimensions.lineHeight.regular} !important;

    @media print {
      font-size: ${dimensions.fontSize.print}px;
    }
  }
`
