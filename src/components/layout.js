/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import Typography from "@material-ui/core/Typography"

import Header from "./header"
import "./layout.css"

const Footer = styled.footer`
  height: 89px;
  text-align: center;
  padding-top: 29px;
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
      <Header menus={data.site.siteMetadata.routes} />
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer>
          <Typography variant="h6">
            {new Date().getFullYear()} Margaret Wong. All rights reserved.
          </Typography>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
