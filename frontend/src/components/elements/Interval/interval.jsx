import './interval.css'

export const Interval=({start, end})=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum

return(
   
    <main className="interval__container">
        <section className="interval__wrapper date__wrapper">
            <div className="interval__date">
                <p>From</p>
                <input type="date" name="start"/>
            </div>
            <div className="interval__date">
                <p>To</p>
                <input type="date" name="end"/>
            </div>
            <div className='interval__date'>
                <select className='interval__status'>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Declined</option>
                </select>
            </div>
        </section>
    </main>
      
         
  
)
}