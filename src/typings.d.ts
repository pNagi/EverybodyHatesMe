interface ICSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module "*.module.scss" {
  const cssModule: ICSSModule
  export = cssModule
}

declare module "*.module.css" {
  const cssModule: ICSSModule
  export = cssModule
}
