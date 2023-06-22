import PropTypes from 'prop-types'
import './metrics.css'

export const Metrics=({num, title, subtitle})=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum
return(
    <>
    <main className="metric__container">
         <section className="metric__wrapper">
            <div className="metric__number">
                <h2>{num}</h2>
            </div>
            <div className="metri__title">
                <p>{title}</p>
            </div>
        </section>
    </main>
    </>
)
}

Metrics.propTypes={
    integer: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string

}