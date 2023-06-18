import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.css';
import {ReactComponent as Loading} from './loading.svg'

export const Loader = ({open, text, hasText, height, width, color, position}) => {
    return (
    <div className={classes.loader__container} 
          style={{height:height, width:{width}, backgroundColor:{color},position:{position}}}>
        <Loading/>
        {hasText? <p>{text}</p>:''}
    </div>
    );
  }


Loader.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
  hasText: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
};
