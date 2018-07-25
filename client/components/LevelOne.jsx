import React from 'react';
import moment from 'moment';
import DaysOption from './DaysOption.jsx';
import TimesOption from './TimesOption.jsx';

const LevelOne = (props) => {
  const {
    nextTwoWeeks, times, max, next, change,
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
        <select onChange={change} name="selectedDate">
          {nextTwoWeeks.map((e, i) => (
            <DaysOption
              day={e}
              key={i}
            />
          ))}
        </select>
      </div>
      <div>
        <select onChange={change} name="selectedTime">
          {times.map((ele, ind) => (
            <TimesOption
              time={ele}
              key={ind}
            />
          ))}
        </select>
        <select onChange={change} name="guestCount">
          {guestCount.map((element, index) => (
            <option value={element} key={index}>
              {element}
            </option>
          ))}
        </select>
      </div>
      <button onClick={next}>Find a Table</button>
    </div>
  );
};

export default LevelOne;
