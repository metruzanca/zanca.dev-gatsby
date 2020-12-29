import React, { useEffect } from "react"
import { useInView } from 'react-intersection-observer';

import {GuardRails, ScrollToOffset} from './styles'

interface Props {
  setHighlight: () => void
  scrollId:string
}

const ObservedSection: React.FC<Props> = ({
  setHighlight,
  children,
  scrollId,
}) => {
  const { ref, inView } = useInView({
    threshold: .7,
  });

  useEffect(() => {
    if(inView) setHighlight()
  }, [inView])

  return (
    <GuardRails ref={ref}>
      <ScrollToOffset id={scrollId}/>
      {children}
    </GuardRails>
  )
}

export function Observed<T>(Component:React.FC<T>){
  return (props: T & Props & {scrollId:string} ) => (
    <ObservedSection
      setHighlight={props.setHighlight}
      scrollId={props.scrollId}
    >
      <Component {...props}/>
    </ObservedSection>
  )
}