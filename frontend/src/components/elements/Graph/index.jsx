import React, { useState } from "react";
import Chart from "react-apexcharts";
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
          categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22,23]
        }
      },
      series: [
        {
          name: "trades",
          data: [3.0, 22.17, 51.0, -5, -15, 16, 27, 19, 31, 41, 15, -5, .9, 0.6, .7, 20],
          
        }
      ],
    };
  
export const Graph=({row, column})=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum

    const [state, setState] = useState(initialState)

return(
    <main className="graph__container">
         <section className="graph__wrapper">
            <div className="graph__header">
                <div className="graph__title">
                    <p>Total Earnings</p>
                    <h2>$460, 000</h2>
                </div>
                <ul className="intervals">
                    <li>1d</li>
                    <li>1w</li>
                    <li>1y</li>
                    <li>all</li>
                </ul>
            </div>
    
            <div className="graph_chart">
                  <div className="graph_mixed_chart">
                      <Chart
                      options={state.options}
                      series={state.series}
                      type="line"
                      width={'600'}
                      height={'270'}
                      />
                  </div>
            </div>
        </section>
    </main>
 
)
}