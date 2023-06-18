import { useState } from 'react'
import PropTypes from 'prop-types'
import { data } from './data'
import './table.css'

const SelectDate=()=>{
    return(
        <div className="selectDate__container">
            <div className="selectDate__wrapper">
                <div className="wrapper">
                    <p>2022</p>
                    <p>June</p>
                </div>
                <div className="wrapper">
                    <p>Device</p>
                    <p>1</p>
                </div>
            </div>
        </div>
    )
}
export const Table=({rate_per_hour})=>{
  // Display total energy consumption on the nalytics panel
    const data_device = data[0]['device_1']

// Retrieve the data for the specified device
let arrData=Object.keys(data[1]["device_2"])


return(
    <main className="table__container">
        <SelectDate/>
        <section className ="table__wrapper">
           <table className="table" cellSpacing={2}>
            <thead>
                <td></td>
                {data_device[arrData[0]].map((item,index)=><th key={index}>{item[0]}</th>)}
            </thead>
                <tbody>
                    {/* For each row,  */}
                {arrData.map((x,idx)=>
                    <tr key={idx}><th>{x}</th>
                        {
                            data_device[x].map((a,idy)=>
                            <td key={idy}>{a[1]}</td>)
                        }
                    </tr>)}
                </tbody>
           </table>
        </section>
    </main>
)
}

Table.propTypes = {
    total: PropTypes.number,
}