import './interval.css'

export const Interval=({start, end})=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum

return(
   
    <main className="interval__container">
        <div className ="interval__wrapper">
            <section>
                <p>Interval</p>
            </section>
            <section className="interval__wrapper date__wrapper">
                <div className="interval__date">
                    <p>Start</p>
                    <input type="date" name="start"/>
                </div>
                <div className="interval__date">
                    <p>End</p>
                    <input type="date" name="end"/>
                </div>
            </section>
        </div>
    </main>
      
         
  
)
}