import React from 'react';
import PropTypes from 'prop-types';

const titleStyle = {
  fontSize: '20px',
  fontWeight: '600',
};

const largeSelectable = {
  marginTop: '10px',
  width: '100%',
  fontSize: '14px',
  border: '1px solid #ccc',
  height: '34px',
  fontFamily: 'Helvetica',
};

const leftSmallSlectable = {
  marginTop: '10px',
  marginRight: '5%',
  width: '47.5%',
  fontSize: '14px',
  border: '1px solid #ccc',
  height: '34px',
  marginBottom: '10px',
};

const rightSmallSelectable = {
  marginTop: '10px',
  width: '47.5%',
  fontSize: '14px',
  border: '1px solid #ccc',
  height: '34px',
  marginBottom: '10px',
};

const findTableButton = {
  width: '100%',
  color: 'white',
  background: '#3cb52e',
  borderColor: '#28781e',
  boxShadow: '0 1px 1px rgba(0,0,0,0.3)',
  borderRadius: '5px',
  padding: '5px 8px',
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '1.5em',
  height: '34px',
};

const getGuestCount = (maximum) => {
  if (typeof maximum !== 'number' || maximum < 0) {
    return null;
  }
  const totalCount = [];
  for (let j = 1; j <= 12; j += 1) {
    if (j <= maximum) {
      totalCount.push(j);
    } else {
      break;
    }
  }
  return totalCount;
};

const LevelOne = (props) => {
  const {
    nextTwoWeeks, times, max, next, change, count, date, time,
  } = props;

  const guestCount = getGuestCount(max);

  return (
    <div id="viewOne">
      <div style={titleStyle}>
        Make a Reservation
      </div>
      <div>
        <select id="selectedData" onChange={change} name="selectedDate" value={date} style={largeSelectable}>
          {nextTwoWeeks.map(possibleDate => (
            <option value={possibleDate} key={possibleDate.toString()}>
              {possibleDate}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select id="selectedTime" onChange={change} name="selectedTime" value={time} style={leftSmallSlectable}>
          {times.map(possibleTime => (
            <option value={possibleTime} key={possibleTime.toString()}>
              {possibleTime}
            </option>
          ))}
        </select>
        <select id="guestCount" onChange={change} name="guestCount" value={count} style={rightSmallSelectable}>
          {guestCount.map(possibleGuestCount => (
            <option value={possibleGuestCount} key={possibleGuestCount.toString()}>
              {possibleGuestCount}
            </option>
          ))}
        </select>
      </div>
      <button type="button" onClick={next} style={findTableButton}>
        Find a Table
      </button>
    </div>
  );
};

LevelOne.propTypes = {
  nextTwoWeeks: PropTypes.arrayOf(PropTypes.string).isRequired,
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
  max: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  count: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default LevelOne;
