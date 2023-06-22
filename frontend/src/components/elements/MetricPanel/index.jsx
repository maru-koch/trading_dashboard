import {InputDropdown, Metrics} from '../../elements'
import './index.css'
export const MetricPanel=({data, average, total, maximum, minimum})=>{
    // Displays the Select device drop down
    // shows estimated total, average, minimum, and maximum via the metrics of
return(
    <>
    <main className="metrics__container">
        <div className="metrics__wrapper">
         
            <Metrics num={16} title={'Active Accounts'} />
            <Metrics num={56} title={'Transfers'}/>
            <Metrics num={34} title={'Request'}/>
       
        </div>
    </main>
    </>
)
}