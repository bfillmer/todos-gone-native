
// Purple color scheme courtesy of my wife's sense of humor.
const deepRuby = 'rgba(115, 75, 94, 1)'
const mistyRose = 'rgba(250, 227, 227, 1)'
const darkPurple = 'rgba(56, 24, 47, 1)'
const thistle = 'rgba(211, 192, 205, 1)'
const linen = 'rgba(248, 244, 227, 1)'

export const theme = {
  colors: {
    primary: darkPurple,
    accent: deepRuby,
    highlight: mistyRose,
    baseBg: linen,
    secondaryBg: thistle
  }
}

// Simple helper function, takes in any number of props mapping to properties within the theme
// object and returns the value.
export const getTheme = (...props) => ({theme}) => props.reduce((t, p) => t[p], theme)
