import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import AppBar from "@material-ui/core/AppBar"
import Card from "@material-ui/core/Card"
import Toolbar from "@material-ui/core/Toolbar"

import HeaderMenu from "../components/headerMenu"

const AppToolbar = styled(Toolbar)`
  height: 70px;
  background-color: white;
`

const AppToolbarIcon = styled.div`
  flex-grow: 1;
  color: black;
  text-decoration: none;
`

const MenuButtonWrapper = styled.div`
  margin-right: 55px;
`

const Header = ({ menus }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header.png" }) {
        childImageSharp {
          fixed(height: 80, width: 214) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <AppBar style={{ paddingRight: "0px !important" }} position="fixed">
      <Card>
        <AppToolbar>
          <AppToolbarIcon>
            <Link to="/">
              <Img fixed={data.placeholderImage.childImageSharp.fixed} />
            </Link>
          </AppToolbarIcon>
          <MenuButtonWrapper>
            {menus.map((menu, index) => (
              <HeaderMenu key={index} {...menu} />
            ))}
          </MenuButtonWrapper>
        </AppToolbar>
      </Card>
    </AppBar>
  )
}

export default Header
