const maxWidth_2xl = '42rem'

const sans = `
  Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
`

const serif = `"Merriweather", "Georgia", Cambria, "Times New Roman", Times, serif`

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
  },
}