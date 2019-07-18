import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"

import Header from "./header"
import "./layout.css"

const Footer = styled.footer`
  height: 120px;
  text-align: center;
  padding-top: 49px;
  text-transform: none;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          routes {
            title
            buttons {
              title
              path
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <Header menus={data.site.siteMetadata.routes} />
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 70,
        }}
      >
        <main>{children}</main>
        <Footer>
          <Typography variant="subtitle1">
            {new Date().getFullYear()} Margaret Wong. All rights reserved.
          </Typography>
        </Footer>
      </div>
    </>
  )
}

export default Layout
