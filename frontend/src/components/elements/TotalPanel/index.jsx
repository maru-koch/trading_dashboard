
import { Text, Interval, Total} from "../../elements"
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
        <div className="total__wrapper">
            <section className="total__right">
                <Text text="TOTAL POWER CONSUMPTION" style ={TEXT_STYLE}/>
                <Interval start={start} end={end}/>
            </section>
            <section className="total__right">
                <Total total={total} />
            </section>
        </div>
    </main>
    </>
)
}