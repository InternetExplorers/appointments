import React from 'react';

const TimesOption = (props) => {
  const { time } = props;
  return (
    <option value={time}>
      {time}
    </option>
  );
};

export default TimesOption;
