// Based on https://medium.flatstack.com/how-to-make-media-queries-strings-in-styled-components-shorter-and-more-reliable-c78bcce13fc8

export enum Breakpoints {
  small = '768px',
  medium = '992px',
  large = '1312px',
}

export function up(breakpoint: Breakpoints, vertical = false) {
  const direction = vertical ? 'height' : 'width'
  return `@media (min-${direction}: ${breakpoint})`
}

export function down(breakpoint: Breakpoints, vertical = false) {
  const direction = vertical ? 'height' : 'width'
  return `@media (max-${direction}: ${breakpoint})`
}

export function between(breakpointMin: Breakpoints, breakpointMax: Breakpoints, vertical = false){
  return `${down(breakpointMax, vertical)} and ${up(breakpointMin, vertical)})`
}