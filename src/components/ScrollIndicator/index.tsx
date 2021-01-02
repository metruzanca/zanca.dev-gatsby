import React from "react"

import {
  MouseScroll,
  Mouse,
  MouseWheel,
  MouseMessage,
} from './styles'

import { Center } from '../../style'

interface Props {
  href:string
  onClick: () => void
}

const ScrollIndicator: React.FC<Props> = ({
  onClick,
  href,
}) => {
  return (
    <Center>
      <MouseScroll href={href} onClick={onClick}> 
        <Mouse>
          <MouseWheel/>
        </Mouse>
        <MouseMessage>scroll</MouseMessage> 
      </MouseScroll>
    </Center>
  )
}

export default ScrollIndicator;