import React from 'react';
import PropTypes from 'prop-types';

const LevelOne = (props) => {
  const titleStyle = {
    fontSize: '20px',
    fontWeight: '600',
  };

  const largeSelectable = {
    marginTop: '10px',
    width: '100%',
    padding: '5px',
    paddingLeft: '20px',
    fontSize: '12px',
    border: '1px solid #ccc',
    height: '34px',
  };

  const selectableField = {
    marginTop: '10px',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    width: '45%',
    padding: '5px',
    paddingLeft: '20px',
    fontSize: '12px',
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
  };


  const {
    nextTwoWeeks, times, max, next, change, count, date, time,
  } = props;

  const guestCount = [];
  for (let j = 1; j <= 12; j += 1) {
    if (j <= max) {
      guestCount.push(j);
    } else {
      break;
    }
  }

  return (
    <div>
      <div style={titleStyle}>
        Make a Reservation
      </div>
      <div>
        <select onChange={change} name="selectedDate" value={date} style={largeSelectable}>
          {nextTwoWeeks.map(possibleDate => (
            <option value={possibleDate}>
              {possibleDate}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select onChange={change} name="selectedTime" value={time} style={selectableField}>
          {times.map(possibleTime => (
            <option value={possibleTime}>
              {possibleTime}
            </option>
          ))}
        </select>
        <select onChange={change} name="guestCount" value={count} style={selectableField}>
          {guestCount.map(possibleGuestCount => (
            <option value={possibleGuestCount}>
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
