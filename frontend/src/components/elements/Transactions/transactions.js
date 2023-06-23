import { useState } from 'react'
import PropTypes from 'prop-types'
import { data } from './data'
import './table.css'

const data_array = [{one:1, two:2, three:3}]

export const Transactions=()=>{

return(
    <main className="table__container">
        <section className ="table__wrapper">
           <table className="table" cellSpacing={2}>
            <thead>
                {['s/n', 'username', 'type', 'amount', 'status', 'date'].map((item, index)=><th key={index}>{item}</th>)}
            </thead>
                <tbody>
                  
                {data.map((row, idx)=>
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

