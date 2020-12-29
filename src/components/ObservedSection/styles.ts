import styled from "styled-components";

/**
 *  Adds a min-heigh to stop buggy behaviour with the nav highlight when sections
 *  are too small causing multiple to be in view and meet the set threshold.
 */
export const GuardRails = styled.div`
  min-height:70vh;
`