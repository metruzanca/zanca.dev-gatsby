import styled from "styled-components";
import { theme } from "../../style";

const boxSize = 200;

export const Grid = styled.div`
display:grid;
grid-gap:30px;
grid-template-columns: repeat(auto-fit, ${boxSize}px);
`

export const Item = styled.div`
  background-color: ${theme.bg.secondary};
  border-radius: 2px;
  padding: 20px;
  height: ${boxSize}px;
  width: ${boxSize}px; /* redundant because of grid-template-columns, i think */
  font-size: ${theme.font.Size_5};
  box-shadow: 0 0 4px 30px rgba(0, 0, 0, .05);
`