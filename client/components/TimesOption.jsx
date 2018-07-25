import React from 'react';
import PropTypes from 'prop-types';

const TimesOption = (props) => {
  const { time } = props;
  return (
    <option value={time}>
      {time}
    </option>
  );
};

TimesOption.propTypes = {
  time: PropTypes.string.isRequired,
};

export default TimesOption;
