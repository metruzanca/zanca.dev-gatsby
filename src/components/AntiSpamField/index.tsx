import React, { useEffect, useState } from "react"

const AntiSpamField: React.FC = ({
  children
}) => {
  const [value, setValue] = useState<typeof children>('Javascript required. Why? Anti form spam')
  
  useEffect(() => {
    window.setTimeout(()=>{
      setValue(children)
    },500)
  }, [])

  return (
    <>{value}</>
  )
}

// RIP no-js people
export default AntiSpamField;