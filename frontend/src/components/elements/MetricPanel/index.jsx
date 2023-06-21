import {InputDropdown, Metrics} from '../../elements'
import './index.css'
export const MetricPanel=({data, average, total, maximum, minimum})=>{
    // Displays the Select device drop down
    // shows estimated total, average, minimum, and maximum via the metrics of
return(
    <>
    <main className="metrics__container">
        <div className="metrics__wrapper">
            <section className="metrics__top">
                <InputDropdown />
            </section>
            <section className="metrics__bottom">
                <Metrics />
                <Metrics />
                <Metrics />
            </section>
        </div>
    </main>
    </>
)
}