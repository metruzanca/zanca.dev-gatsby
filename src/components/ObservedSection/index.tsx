import React, { useEffect } from "react"
import { useInView } from 'react-intersection-observer';

import {GuardRails, ScrollToOffset} from './styles'

export interface ObservedSectionProps {
  handleInView: () => void
  scrollId:string
}

const ObservedSection: React.FC<ObservedSectionProps> = ({
  handleInView,
  children,
  scrollId,
}) => {
  const { ref, inView } = useInView({
    threshold: .7,
  });

  useEffect(() => {
    if(inView) handleInView()
  }, [inView])

  return (
    <GuardRails ref={ref}>
      <ScrollToOffset id={scrollId}/>
      {children}
    </GuardRails>
  )
}

export function Observed<T>(Component:React.FC<T>){
  return (props: T & ObservedSectionProps ) => (
    <ObservedSection
      handleInView={props.handleInView}
      scrollId={props.scrollId}
    >
      <Component {...props}/>
    </ObservedSection>
  )
}