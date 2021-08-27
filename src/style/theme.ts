import styled, { createGlobalStyle } from "styled-components"

const maxWidth = {
  "none": "none",
  "xs": "20rem",
  "sm": "24rem",
  "md": "28rem",
  "lg": "32rem",
  "xl": "36rem",
  "2xl": "42rem", // wrapper
  "3xl": "48rem",
  "4xl": "56rem",
  "full": "100%"
}

const sans = `
  Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
`

const serif = `"Merriweather", "Georgia", Cambria, "Times New Roman", Times, serif`

const mono = `'Fira Code', 'Fira Mono', 'SF Mono', 'Roboto Mono', monospace`

export default {
  bg:{
    primary:'#2f324c',
    secondary:'#393b54',
    // TODO REplace weird backgroung image thing
    thirdiary: '#25283c',
    footer: '#161824',
  },
  fg:{
    primary:'#ffffff',
    accent:'#f7e13a',
    links:'#6883fd',
    linksVisited:'#8d77ff',
    blueishGray:'#8892b0',
    lightBlueishGray:'#ccd6f6',
  },
  spacing_0: '0',
  spacing_1: '0.25rem',
  spacing_2: '0.5rem',
  spacing_3: '0.75rem',
  spacing_4: '1rem',
  spacing_5: '1.25rem',
  spacing_6: '1.5rem',
  spacing_8: '2rem',
  spacing_10: '2.5rem',
  spacing_12: '3rem',
  spacing_16: '4rem',
  spacing_20: '5rem',
  spacing_24: '6rem',
  spacing_32: '8rem',
  lineHeight_none: 1,
  lineHeight_tight: 1.1,
  lineHeight_normal: 1.5,
  lineHeight_relaxed: 1.625,
  maxWidth_wrapper: maxWidth["2xl"],
  font:{
    body: serif, // family
    Heading: sans, // family
    mono, // family
    // 1.200 Minor Third Type Scale https://type-scale.com/
    Size_root: '16px',
    Size_0: '0.833rem',
    Size_1: '1rem',
    Size_2: '1.2rem',
    Size_3: '1.44rem',
    Size_4: '1.728rem',
    Size_5: '2.074rem',
    Size_6: '2.488rem',
    Size_7: '2.986rem',
    Weight_normal: 400,
    Weight_medium: 500,
    Weight_semibold: 600,
    Weight_bold: 700,
    Weight_extrabold: 800,
    Weight_black: 900,
  },
  nav:{
    height:80
  },
  ctaRadius: '2px',
}

// TODO replace theme with flat (currently unused)
const flat = {
  // Background Colors
  color_primary:'#2f324c',
  color_secondary:'#393b54',
  // TODO REplace weird backgroung image thing
  color_thirdiary: '#25283c',
  color_footer: '#161824',
  // Layout
  spacing_0: '0',
  spacing_1: '0.25rem',
  spacing_2: '0.5rem',
  spacing_3: '0.75rem',
  spacing_4: '1rem',
  spacing_5: '1.25rem',
  spacing_6: '1.5rem',
  spacing_8: '2rem',
  spacing_10: '2.5rem',
  spacing_12: '3rem',
  spacing_16: '4rem',
  spacing_20: '5rem',
  spacing_24: '6rem',
  spacing_32: '8rem',
  lineHeight_none: 1,
  lineHeight_tight: 1.1,
  lineHeight_normal: 1.5,
  lineHeight_relaxed: 1.625,
  maxWidth_wrapper: maxWidth["2xl"],
  // Font
  fontFamily_body: serif, // family
  fontFamily_heading: sans, // family
  fontFamily_mono: mono, // family
  // 1.200 Minor Third Type Scale https://type-scale.com/
  fontSize_root: '16px',
  fontSize_0: '0.833rem',
  fontSize_1: '1rem',
  fontSize_2: '1.2rem',
  fontSize_3: '1.44rem',
  fontSize_4: '1.728rem',
  fontSize_5: '2.074rem',
  fontSize_6: '2.488rem',
  fontSize_7: '2.986rem',
  fontWeight_normal: 400,
  fontWeight_medium: 500,
  fontWeight_semibold: 600,
  fontWeight_bold: 700,
  fontWeight_extrabold: 800,
  fontWeight_black: 900,
  fontColor_primary:'#ffffff',
  fontColor_accent:'#f7e13a',
  fontColor_links:'#6883fd',
  fontColor_linksVisited:'#8d77ff',
  fontColor_blueishGray:'#8892b0',
  fontColor_lightBlueishGray:'#ccd6f6',
  // Misc
  navHeight: 80,
  ctaRadius: '2px',
}

// These two functions will be used along with flat 

export function createSheet(data: Object){
  return Object.entries(data)
    .map(([k,v]) => `--${k}: ${v};\n`)
    .join("")
}

export function cssVar(key: keyof typeof flat){
  return `var(--${key})`
}