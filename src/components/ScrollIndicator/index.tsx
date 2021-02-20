import React from "react"

import {
  MouseScroll,
  Mouse,
  MouseWheel,
  MouseMessage,
} from './styles'

import { CenterDiv } from '../../style'

interface Props {
  href:string
  onClick: () => void
}

const ScrollIndicator: React.FC<Props> = ({
  onClick,
  href,
}) => {
  return (
    <CenterDiv>
      <MouseScroll href={href} onClick={onClick}> 
        <Mouse>
          <MouseWheel/>
        </Mouse>
        <MouseMessage>scroll</MouseMessage> 
      </MouseScroll>
    </CenterDiv>
  )
}

export default ScrollIndicator;