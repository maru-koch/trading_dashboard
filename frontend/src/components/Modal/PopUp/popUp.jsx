 
import PropTypes from 'prop-types'
import classes from './popUp.module.css'

export const PopUp=({title, content, btnText, action})=>{
    return (
        <div className={classes.pop__container}>
            <div className={classes.pop__wrapper}>
                <div className={classes.pop__title}>
                    <h2>{title}</h2>
                </div>
                <p className={classes.pop__content}>{content}</p>
                {/* <div className={classes.pop__btn}>
                    <Button text= {btnText} onClick={()=>action()}/>
                </div> */}
            </div>
        </div>
    )
}

PopUp.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    btnText: PropTypes.string,
    action: PropTypes.string,
}