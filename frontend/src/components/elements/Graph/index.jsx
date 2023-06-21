import React, { useState } from "react";
import Chart from "react-apexcharts";
import './index.css'
const initialState ={
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22,23]
        }
      },
      series: [
        {
          name: "series-1",
          data: [0.3, 0.4, 0.5, 0.5, 4.9, 0.6, 0.7, 0.9, 0.3, 0.4, 0.5, .5, .9, 0.6, .7, .8]
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
            <div className="graph__title">
               <h2>Display Graph</h2>
            </div>
            <div className="graph__chart">
                <div className="graph__chart_">
                    <div className="mixed-chart">
                        <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        width="500"
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
 
)
}