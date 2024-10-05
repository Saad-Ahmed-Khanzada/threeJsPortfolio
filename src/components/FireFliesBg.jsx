
"use client"
import React, { useEffect, useState } from 'react'

const createFireFly = () => ({
        id:Math.random(),
        top: `${Math.random()*100}%`,
        left: `${Math.random()*100}%`,
        animationDuration:`${Math.random()*5 + 5}s`,
    }
)


const FireFliesBg = () => {
    const [fireflies,setFireflies]=useState([])

    useEffect(() => {
        
        const addFireflyPeriodically=()=>{
            const newFirefly= createFireFly();
            setFireflies(currentFireFlies=>[
                ...currentFireFlies.slice(-14),
                newFirefly
            ])
        }

        const interval= setInterval(addFireflyPeriodically,1000);

        return ()=>clearInterval(interval)

    }, [])
    

  return (
    <div className='fixed left-0 top-0 w-full h-full -z-10 overflow-hidden '>
        {fireflies.map((firefly)=>{
            return <div key={firefly.id} className='absolute rounded-full  w-[10px] h-[10px] bg-firefly-radial'
            style={{
                top:firefly.top,
                left:firefly.left,
                animation:`move ${firefly.animationDuration} infinite alternate`
            }}
            >  </div>
        })}
    </div>
  )
}

export default FireFliesBg