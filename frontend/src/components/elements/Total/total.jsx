
import { useState, useEffect } from 'react'

import './total.css'
export const Total=({ total })=>{
  // Display total energy consumption on the analytics panel

  const [isChanged, setIsChanged] = useState(true)

 const changeColor=()=>{
    setInterval(()=>{
        setIsChanged(!isChanged)
        console.log(isChanged)
    }, 1000)
 }

useEffect(()=>{
    changeColor()
})

return(
    <main className ="total__energy_container">
        <section className ="total__energy_wrapper">
            <div className="total__energy_total">
                <h2>{total}</h2>
            </div>
            <div>
                <div>
                    <div className={isChanged? 'dot': 'dotGreen'}>
                    </div>
                </div>
                <div className ="total__unit">
                    <p>MW</p>
                </div>
            </div>
        </section>
    </main>
)
}

