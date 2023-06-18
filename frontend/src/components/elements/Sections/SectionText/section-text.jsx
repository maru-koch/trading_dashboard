import PropTypes from 'prop-types'
import { Button } from '../../../elements'
import  classes from './section-text.module.css'

export const SectionText = ({btn, bg, title, description, btnText, openModal})=>{
    return (
    <div className={`${classes.sectionText__container}`} style ={bg}>
        <div className={classes.sectionText__wrapper}>
            <div className = {classes.sectionText__content}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={classes.btn__container}>
                    {btn && <Button text={btnText} onClick={()=>openModal()}/>}
                </div>
            </div>
            {/* Show button if only btn is true */}
          
        </div>
    </div>
    )
}

SectionText.propTypes = {
    btn: PropTypes.bool.isRequired,
    style: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btnText: PropTypes.string,
}