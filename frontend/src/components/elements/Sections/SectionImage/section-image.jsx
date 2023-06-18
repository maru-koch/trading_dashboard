import PropTypes from 'prop-types'

import classes from './section-image.module.css';
import { Button } from '../../../elements'

export const SectionImage=({btn, btnText, image, height, width, wrapperStyle, containerStyle, imageStyle})=>{

    // Displays image and button on a page
    // only displays the button if btn is true

    return(
        <div className ={classes.starter__container} style={containerStyle}>
            <div className ={classes.starter__wrapper} style={wrapperStyle}>
                <img src={image} alt="Starter pack" height ={height} width={width} style={imageStyle}/>
                <div className ={classes.starter__btn_wrapper}>
                     { btn && <Button text = { btnText } /> }
                </div>
            </div>
        </div>
    )
}

SectionImage.propTypes = {
    containerStyle: PropTypes.string,
    wrapperStyle: PropTypes.string,
    imageStyle: PropTypes.string,
    btn: PropTypes.bool.isRequired,
    btnText: PropTypes.string,
    image: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    style: PropTypes.string
}