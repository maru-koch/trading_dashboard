import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import { Button, Text } from '../../elements';

import './style.css';

const PickupSnipet = ({ title, text }) => (
  <div className="snipet__container">
    <div className="snipet__wrapper">
      <Text text={title} color="neutral-60" font-size="16px" line-height="24px" />
      <Text text={text} color="neutral-70" font-size="16px" line-height="24px" />
    </div>
  </div>
);

PickupSnipet.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export const PickupSnipets = ({ customer, date, location }) => (
  <div className="container">
    <div className="wrapper">
      <div className="div">
        <div className="dot_wrapper">
          <div className="dot" />
        </div>
      </div>
      <div className="div">
        <PickupSnipet title="Name of Customer" text={customer} />
      </div>
      <div className="div">
        <PickupSnipet title="Pickup Date" text={date} />
      </div>
      <div className="div">
        <PickupSnipet title="Pickup Location" text={location} />
      </div>
      <div className="div btn">
        <Button round btnType="secondary" text="Request Pickup" />
      </div>
    </div>
  </div>
);

PickupSnipets.propTypes = {
  customer: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
};
