import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Loader } from "../Loader";
import {useSelector} from 'react-redux'

import './index.css'

const initialState ={
      fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
      },
      options: {
        chart: {
          id: "basic-bar"
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,]
        }
      },
      series: [
        {
          name: "trades",
          data: [],
          
        }
      ],
    };
  
export const Graph=({trader})=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum

    const [tradeData, setTradeData] = useState(initialState)
  
  
    const extractTradeData=()=>{
      const trade_data = []
      
      try{

        const trades = trader.trades
        trade_data.push(100)
        for (let trade of trades){
          const amount = trade.balance;
          trade_data.push(amount)
        }
      }catch(err){
        console.log(err)
      }finally{
        setTradeData({...tradeData, series:[{name:'trades', data:trade_data}]})
      }
     
    }

  useEffect(()=>{
    extractTradeData()

  }, [trader])

return(
    <main className="graph__container">
         <section className="graph__wrapper">
            <div className="graph__header">
                <div className="graph__title">
                    <p>Total Earnings</p>
                    <h2>$ {trader?.fund?.amount}</h2>
                </div>
                <ul className="intervals">
                    <li>1d</li>
                    <li>1w</li>
                    <li>1y</li>
                    <li>all</li>
                </ul>
            </div>
    
            <div className="graph_chart">
                  {true?
                  <div className="graph_mixed_chart">
                      <Chart
                      options={tradeData.options}
                      series={tradeData.series}
                      type="line"
                      width={'600'}
                      height={'270'}
                      />
                  </div>
                  :
                  <Loader width={70} height={70}/>
                }
            </div>
        </section>
    </main>
 
)
}