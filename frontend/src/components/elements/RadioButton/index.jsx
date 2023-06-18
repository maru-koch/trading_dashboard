import PropTypes from 'prop-types';

import './style.css';

const basePropTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};

export const Radio = ({ text, name }) => {
  const idd = text.replace(/ /g, '_');
  return (
    <div className="RadioButton-body">
      <input type="radio" id={idd} name={name} />
      <label htmlFor={idd}>{text}</label>
    </div>
  );
};

Radio.propTypes = {
  ...basePropTypes,
};
