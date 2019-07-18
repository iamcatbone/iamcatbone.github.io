import Button from "@material-ui/core/Button"
import Popover from "@material-ui/core/Popover"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const MenuButton = styled(Button)`
  height: 70px;
  padding-left: 15px !important;
  padding-right: 15px !important;
`

const MenuLink = styled(Link)`
  color: black !important;
  text-decoration: none !important;
`

const HeaderMenu = ({ buttons, title }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  if (buttons.length === 1) {
    return (
      <MenuLink to={buttons[0].path}>
        <MenuButton>{title}</MenuButton>
      </MenuLink>
    )
  } else {
    return [
      <MenuButton
        key="button"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {title}
      </MenuButton>,
      <Popover
        id="menu"
        key="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {buttons.map(({ title, path }, index) => (
          <div key={index}>
            <MenuLink to={path}>
              <MenuButton onClick={handleClose} fullWidth={true}>
                {title}
              </MenuButton>
            </MenuLink>
          </div>
        ))}
      </Popover>,
    ]
  }
}

export default HeaderMenu
