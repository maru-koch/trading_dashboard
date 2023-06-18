import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Hline } from './hline.svg';

// import clsx from 'clsx';

const colors = {
  'primary-main': 'var(--primary-main)',
  green: 'var(--primary-80)',
  black: 'var(--neutral-70)',
  grey: 'var(--dark-color)',
  grey60: 'var(--background-color)',
  'secondary-80': 'var(--secondary-80)',
  white: '#ffffff',
};

export const Text = ({ text, size, weight, children, color, ...props }) => (
  <p style={{ fontSize: size || 16, fontWeight: weight || 450, color: colors[color || 'black'] }} {...props}>
    {text || children}
  </p>
);

export const Heading = ({ text, size, weight, level, children, color, ...props }) =>
  React.createElement(
    `h${level || 1}`,
    {
      style: {
        fontSize: size || 16,
        fontWeight: weight || 450,
        color: colors[color || 'black'],
      },
      ...props,
    },
    text || children
  );

export const Divider = ({ text, children, navigate}) => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
    <Hline />
    <p style={{ fontSize: '16px', fontWeight: 450, lineHeight: '24px', color: '#025002', cursor:'pointer'}} onClick={navigate}>
      {text || children}
    </p>
    <Hline />
  </div>
);

export const RememberMe = ({ navigate }) => (
  <div
    style={{
      fontSize: 14,
      fontWeight: 500,
      color: 'rgba(24, 24, 24, 0.5)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
  >
    <input style={{ margin: '0 8px' }} type="checkbox" />
    <p style={{ marginRight: 'auto' }}>Remember me</p>
    <p style={{ marginRight: '8px', color:"#4C3FCF", cursor:"pointer" }} onClick={navigate}>Forgot Password?</p>
  </div>
);


export const Icon = ({isValid, text, unvalidated})=>{
    <div>
        <div>
            <i className={unvalidated? "fa fa-hypen": isValid? "fa fa-good" : "fa fa-times"}></i>
            <p>Nothing here</p>
        </div>
    </div>;
};

Text.Heading = Heading;
Text.Divider = Divider;
Text.RememberMe = RememberMe;
Text.Icon = Icon;

const basePropTypes = {
  weight: PropTypes.oneOf([400, 450, 500, 700]),
  size: PropTypes.number,
  text: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(colors)),
};

Text.propTypes = {
  ...basePropTypes,
};

Heading.propTypes = {
  ...basePropTypes,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Divider.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

Icon.propTypes = {
  text: PropTypes.string,
  isValid: PropTypes.bool,
  unvalidated: PropTypes.bool,
};

RememberMe.propTypes = {};
