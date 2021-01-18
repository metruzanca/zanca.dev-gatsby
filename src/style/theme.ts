const maxWidth_2xl = '42rem'

const sans = `
  Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
`

const serif = `"Merriweather", "Georgia", Cambria, "Times New Roman", Times, serif`

const mono = `"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace`

export default {
  bg:{
    primary:'#2f324c',
    secondary:'#393b54',
  },
  fg:{
    primary:'#ffffff',
    accent:'#f7e13a',
    links:'#6883fd',
    linksVisited:'#8d77ff',
    blueishGray:'#8892b0',
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
  maxWidth_wrapper: maxWidth_2xl,
  font:{
    body: serif,
    Heading: sans,
    mono,
    // 1.200 Minor Third Type Scale https://type-scale.com/
    Size_0: '0.833rem',
    Size_1: '1rem',
    Size_2: '1.2rem',
    Size_3: '1.44rem',
    Size_4: '1.728rem',
    Size_5: '2.074rem',
    Size_6: '2.488rem',
    Size_7: '2.986rem',
  },
  nav:{
    height:80
  },
  ctaRadius: '2px',
}