import React from "react"
import { theme } from "./src/utils/muiTheme"
import { MuiThemeProvider } from "@material-ui/core/styles"

export const wrapRootElement = ({ element }) => {
  return <MuiThemeProvider theme={theme}>{element}</MuiThemeProvider>
}
