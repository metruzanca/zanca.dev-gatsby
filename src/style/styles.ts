import { Link as GatsbyLink} from 'gatsby'
import styled from 'styled-components'

import theme from './theme' 

export const Link = styled(GatsbyLink)`
  color: ${theme.fg.links};
  &:visited {
    color: ${theme.fg.linksVisited};
  }
`

export const Highlight = styled.span`
  color:${theme.fg.accent};
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`