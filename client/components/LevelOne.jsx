import React from 'react';
import PropTypes from 'prop-types';
import DaysOption from './DaysOption.jsx';
import TimesOption from './TimesOption.jsx';

const LevelOne = (props) => {
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
      <h3>
        Make a Reservation
      </h3>
      <div>
        <select onChange={change} name="selectedDate" value={date}>
          {nextTwoWeeks.map((e, i) => (
            <DaysOption
              day={e}
              key={i}
            />
          ))}
        </select>
      </div>
      <div>
        <select onChange={change} name="selectedTime" value={time}>
          {times.map((ele, ind) => (
            <TimesOption
              time={ele}
              key={ind}
            />
          ))}
        </select>
        <select onChange={change} name="guestCount" value={count}>
          {guestCount.map((element, index) => (
            <option value={element} key={index}>
              {element}
            </option>
          ))}
        </select>
      </div>
      <button type="button" onClick={next}>
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
