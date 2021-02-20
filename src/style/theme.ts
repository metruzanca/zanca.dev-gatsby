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