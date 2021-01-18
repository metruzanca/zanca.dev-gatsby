import React, { useEffect, useState } from "react"

const AntiSpamField: React.FC = ({
  children
}) => {
  const [value, setValue] = useState<typeof children>(null)
  
  useEffect(() => {
    window.setTimeout(()=>{
      setValue(children)
    },1000)
  }, [])

  return (
    <>{value}</>
  )
}

// RIP no-js people
export default AntiSpamField;