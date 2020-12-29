import styled from "styled-components";
import { theme } from "../../style";

/**
 * Adds a min-heigh to stop buggy behaviour with the nav highlight when sections
 * are too small causing multiple to be in view and meet the set threshold.
 */
export const GuardRails = styled.div`
  position:relative;
  min-height:70vh;
`
/**
 * HTML does not have a way to add an offset for "scroll to" via IDs.
 * Adding a span and then moving it up with absolute, works as an offset.
 * 
 * theme.nav.height + 10 extra for a bit of breathing room
 */
export const ScrollToOffset = styled.span`
  position:absolute;
  pointer-events: none;
  top:${- (theme.nav.height + 10)}px;
`