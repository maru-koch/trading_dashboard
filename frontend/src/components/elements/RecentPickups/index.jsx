import { Text } from '../../elements';
import './style.css';
import PropTypes from 'prop-types';

export const RecentPickups = ({ pickupId, measurement, points, status, pickupDate, collectionOfficer }) => (
  <div className="pickup-container">
    <div className="dot-info">
      <div className="dot" style={{ backgroundColor: 'green' }} />
    </div>

    <div className="info">
      <div>
        <Text className="title-info">ID</Text>
      </div>
      <div>
        <Text>{pickupId}</Text>
      </div>
    </div>

    <div className="info">
      <div>
        <Text>Measurement</Text>
      </div>
      <div>
        <Text>{measurement}KG</Text>
      </div>
    </div>

    <div className="info">
      <div>
        <Text>Points</Text>
      </div>
      <div>
        <Text>{points}</Text>
      </div>
    </div>

    <div className="info">
      <div>
        <Text>Status</Text>
      </div>
      <div>
        <Text>{status}</Text>
      </div>
    </div>

    <div className="info">
      <div>
        <Text>Date of Pickup</Text>
      </div>
      <div>
        <Text>{pickupDate}</Text>
      </div>
    </div>

    <div className="info">
      <div>
        <Text>Collection Officer</Text>
      </div>
      <div>
        <Text>{collectionOfficer}</Text>
      </div>
    </div>
  </div>
);

RecentPickups.propTypes = {
  pickupId: PropTypes.string,
  measurement: PropTypes.number,
  points: PropTypes.number,
  status: PropTypes.string,
  pickupDate: PropTypes.string,
  collectionOfficer: PropTypes.string,
};
