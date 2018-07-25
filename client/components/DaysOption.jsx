import React from 'react';
import PropTypes from 'prop-types';

const DaysOption = (props) => {
  const { day } = props;
  return (
    <option value={day}>
      {day}
    </option>
  );
};

DaysOption.propTypes = {
  day: PropTypes.string.isRequired,
};

export default DaysOption;
