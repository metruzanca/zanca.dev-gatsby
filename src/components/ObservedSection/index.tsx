import React, { useEffect } from "react"
import { useInView } from 'react-intersection-observer';

import {GuardRails, ScrollToOffset} from './styles'

export interface ObservedSectionProps {
  handleInView: () => void
  scrollId:string
  isObserving?:boolean
}

const ObservedSection: React.FC<ObservedSectionProps> = ({
  handleInView,
  children,
  scrollId,
  isObserving,
}) => {
  const { ref, inView } = useInView({
    threshold: .7,
    skip: !isObserving,
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
      isObserving={props.isObserving}
    >
      <Component {...props}/>
    </ObservedSection>
  )
}