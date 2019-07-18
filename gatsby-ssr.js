import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "./src/utils/muiTheme"

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <MuiThemeProvider theme={theme} {...props}>
      {element}
    </MuiThemeProvider>
  )
}
