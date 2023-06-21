import './index.css'
import PropTypes from 'prop-types'
export const DashCard=({title, icon, id, metric})=>{
    return (
        <div className={`card card-${id}`}>
            <div className="card__wrapper">
                <div className='card__detail'>
                    <h2 className="card__title">{metric}</h2>
                    <h2 className="card__title">{title}</h2>
                    <p className="card__exit"><i class="fas fa-trend"></i></p>
                </div>
                <div className="card__icon">
                    <i className={`fas ${icon}`}></i>
                </div>
            </div>
            <p className="card__apply">
            <a className="card__link" href="#">stat <i class="fas fa-arrow-right"></i></a>
            </p>
        </div>
    )
}


DashCard.propTypes={
    icon:PropTypes.string,
    title:PropTypes.string,
    metric: PropTypes.number,
    idx: PropTypes.number,
}