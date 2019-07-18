import createBreakpoints from "@material-ui/core/styles/createBreakpoints"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

export const bps = createBreakpoints({})

export const headingFontFamily = "Nunito Sans, Source Serif Pro, sans-serif"
export const bodyFontFamily = "Nunito Sans, PT Serif, sans-serif"

export const fontFamily = [
  "Nunito Sans",
  "Source Serif Pro",
  "sans-serif",
  "-apple-system",
  '"Helvetica Neue"',
  "Arial",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
]

export const typography = {
  useNextVariants: true,
  fontFamily: fontFamily.join(","),
  h1: {
    fontFamily: headingFontFamily,
  },
  h2: {
    fontFamily: headingFontFamily,
  },
  h3: {
    fontFamily: headingFontFamily,
  },
  h4: {
    fontFamily: headingFontFamily,
  },
  h5: {
    fontFamily: headingFontFamily,
  },
  h6: {
    fontFamily: headingFontFamily,
  },
  body1: {
    fontFamily: bodyFontFamily,
  },
  body2: {
    fontFamily: bodyFontFamily,
  },
  caption: {
    fontFamily: bodyFontFamily,
  },
}

export const theme = createMuiTheme({
  typography,
})
