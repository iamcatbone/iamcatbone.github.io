import AppBar from "@material-ui/core/AppBar"
import Card from "@material-ui/core/Card"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import HeaderMenu from "../components/headerMenu"

const AppToolbar = styled(Toolbar)`
  height: 110px;
  background-color: white;
`

const AppToolbarIcon = styled.div`
  flex-grow: 1;
  color: black;
  text-decoration: none;
`

const AppToolbarIconImage = styled.img`
  margin-bottom: 0 !important;
`

const MenuButtonWrapper = styled.div`
  margin-right: 55px;
`

const Header = ({ menus }) => (
  <AppBar position="static">
    <Card>
      <AppToolbar>
        <AppToolbarIcon>
          <Link to="/">
            <AppToolbarIconImage src="/header.png" alt="home" />
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
