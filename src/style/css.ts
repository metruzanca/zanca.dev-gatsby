import { css } from 'styled-components'

import theme from './theme' 

export const HeadingCSS = css`
  font-family: Montserrat;
  font-weight: 700;
`

/**
 * Darkens a given color by a set percentage
 * @param value 0-1 value to darken
 */
export const darken = (value:number) => css`
  background-image: linear-gradient(
    0deg,
    rgba(0,0,0,${value}) 0%,
    rgba(0,0,0,${value}) 100%);
`

/**
 * Lightens a given color by a set percentage
 * @param value 0-1 value to lighten
 */
export const lighten = (value:number) => css`
  background-image: linear-gradient(
    0deg,
    rgba(255,255,255,${value}) 0%,
    rgba(255,255,255,${value}) 100%);
`