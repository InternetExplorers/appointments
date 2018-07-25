import React from 'react';
import PropTypes from 'prop-types';

const LevelThree = (props) => {
  const {
    name, address, city, state, zip, change, date, time, book,
    first, last, email, phone, count, back,
  } = props;

  const addressString = `${city} ${state}, ${zip}`;

  let isValid = false;
  if (first && last && email && phone) {
    isValid = true;
  }

  const notValid = (event) => {
    event.preventDefault();
    alert('Must complete the required fields.');
  };

  return (
    <form>
      <div>
        <div>
          First Name*
          <input onChange={change} type="text" name="firstName" value={first} />
          Last Name*
          <input onChange={change} tyep="text" name="lastName" value={last} />
        </div>
        <div>
          Email*
          <input onChange={change} name="email" value={email} />
          Mobile Number*
          <input onChange={change} name="phone" value={phone} />
        </div>
        <div>
          * = required field
        </div>
      </div>
      <br />
      <div>
        <div>
          {date}
          {' at '}
          {time}
        </div>
        <div>
          {name}
        </div>
        <div>
          {address}
          <br />
          {addressString}
        </div>
        <div>
          Guests: &nbsp;
          {count}
        </div>
        <div>
          <div role="button" tabIndex={0} onClick={back} onKeyPress={back}>
            *edit*
          </div>
        </div>
        {isValid
          ? (
            <button type="submit" onClick={book}>
                    Book Appointment
            </button>
          )
          : (
            <button type="submit" onClick={notValid}>
              Not complete
            </button>
          )
        }
      </div>
    </form>
  );
};

LevelThree.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  book: PropTypes.func.isRequired,
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  back: PropTypes.func.isRequired,
};

export default LevelThree;
