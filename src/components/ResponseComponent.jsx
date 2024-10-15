"use client"


import React from 'react'
import useScreenSize from './hooks/useScreenSize'

const ResponseComponent = ({children}) => {
//   console.log("CHILDREnsss",children);
  
  const size = useScreenSize();
    return (
    <>
        {children({size})}
    </>
      )
}

export default ResponseComponent