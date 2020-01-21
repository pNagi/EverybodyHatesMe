import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import { IconContext } from "react-icons"

import "modern-normalize"
import "../styles/normalize"

interface IStaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

export const PageLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
  >
    {(data: IStaticQueryProps) => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: data.site.siteMetadata.description }
          ]}
        />
        <IconContext.Provider value={{ color: "inherit" }}>
          {children}
        </IconContext.Provider>
      </React.Fragment>
    )}
  </StaticQuery>
)
