import { useState } from 'react'
import PropTypes from 'prop-types'
import { data } from './data'
import './table.css'

export const TradeHistory=({trades, headers})=>{
return(
    <main className="table__container">
        <section className ="table__wrapper">
           <table className="table" cellSpacing={2}>
            <thead>
                {headers.map((item, index)=><th key={index}>{item}</th>)}
            </thead>
                <tbody>
                  
                {trades.map((row, idx)=>
                <tr>
                    <td>{idx + 1}</td>{Object.values(row).map((col, idx)=><td>{col}</td>)}
                </tr>
                )}
                </tbody>
           </table>
        </section>
    </main>
)
}

