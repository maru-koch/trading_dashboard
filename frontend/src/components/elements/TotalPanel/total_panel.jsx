
import { Text, Interval, Total} from ".."
import './index.css'

export const TotalPanel=({total, start, end})=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum
const TEXT_STYLE={
    fontFamily:'Poppins',
    fontSize:'1rem',
    marginTop: '10px',
    marginLeft:'2px',
    color: '#333'
}
return(
    <>
    <main className="total__container">
        <div className="transactions">
            <h2>Transactions</h2>
        </div>
        <div className="total__wrapper">
            
            <Interval start={start} end={end}/>
           
        </div>
    </main>
    </>
)
}