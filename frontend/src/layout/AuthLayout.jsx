import React from 'react';
import './authLayout.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const AuthLayout = ({ children, bodyClassName }) => (
  <>
    <div className={clsx('form-container', bodyClassName)}>
      <div className="nav-content">{children}</div>
    </div>
  </>
);

AuthLayout.propTypes = {
  children: PropTypes.node,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
};
