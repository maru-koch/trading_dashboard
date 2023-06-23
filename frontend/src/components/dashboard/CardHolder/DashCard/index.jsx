import './index.css'
import PropTypes from 'prop-types'
export const DashCard=({title, icon, id, metric})=>{
    return (
        <div className={`card card-${id}`}>
            <div className="card_wrapper">
                <div className='card_row'>
                    <p className="card_title">{title}</p>
                    <div className="card_icon">
                        <i className={`${icon}`}></i>
                    </div>
                </div>
                <div className='card_row metric'>
                    <h2 className="card_metric">{metric}</h2>
                </div>
                <div className='card_row'>
                    <p className="card_trend"><i class="fa-solid fa-arrow-trend-up"></i></p>
                    <p className="card_apply">
                        <a className="card_arrow" href="#"><i class="fas fa-arrow-right"></i></a>
                    </p>
                </div>
            </div>
        </div>
    )
}


DashCard.propTypes={
    icon:PropTypes.string,
    title:PropTypes.string,
    metric: PropTypes.number,
    idx: PropTypes.number,
}