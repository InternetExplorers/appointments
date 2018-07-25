import React from 'react';

const DaysOption = (props) => {
  const { day } = props;
  return (
    <option value={day}>
      {day}
    </option>
  );
};

export default DaysOption;
