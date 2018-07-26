import React from 'react';
import PropTypes from 'prop-types';

const LevelThree = (props) => {
  const titleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#d90007',
  };

  const leftCol = {
    width: '30%',
    marginTop: '10px',
    fontSize: '12px',
  };

  const rightCol = {
    width: '100%',
  };

  const inputStyle = {
    width: '100%',
  };

  const summary = {
    marginTop: '20px',
    marginBottom: '20px',
    width: '90%',
    padding: '5%',
    paddingTop: '10%',
    background: 'lightGrey',
    borderRadius: '5px',
    fontSize: '12px',
    borderColor: 'grey',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: 'minmax(40px, auto)',
  };

  const timeStyleA = {
    gridColumn: '1 / 5',
    gridRow: '1',
  };

  const timeStyleB = {
    gridColumn: '2 / 5',
    gridRow: '1',
  };

  const placeStyleA = {
    gridColumn: '1 / 5',
    gridRow: '3',
  };

  const placeStyleB = {
    gridColumn: '2 / 5',
    gridRow: '3/5',
  };

  const guestStlyeA = {
    gridColumn: '1 / 5',
    gridRow: '2',
  };

  const guestStlyeB = {
    gridColumn: '2',
    gridRow: '2',
  };

  const editStyle = {
    gridColumn: '1 / 5',
    gridRow: '4',
    paddingTop: '15px',
    color: '#0073bb',
  };

  const findTableButton = {
    width: '100%',
    color: 'white',
    background: '#d90007',
    borderColor: '#8d0005',
    boxShadow: '0 1px 1px rgba(0,0,0,0.3)',
    borderRadius: '5px',
    padding: '5px 8px',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '1.5em',
    height: '34px',
  };

  const {
    name, address, city, state, zip, change, date, time, book,
    first, last, email, phone, count, back,
  } = props;

  const addressString = `${city} ${state}, ${zip}`;

  const notValid = (event) => {
    event.preventDefault();
    alert('Must complete the required fields.');
  };

  let isValid = false;
  if (first && last && email && phone) {
    isValid = true;
  }

  return (
    <form>
      <div>
        <div style={titleStyle}>
          Confirm Reservation
        </div>
        <div>
          <div style={leftCol}>
            First Name*
          </div>
          <div style={rightCol}>
            <input onChange={change} name="firstName" value={first} style={inputStyle} />
          </div>
        </div>
        <div>
          <div style={leftCol}>
            Last Name*
          </div>
          <div style={rightCol}>
            <input onChange={change} name="lastName" value={last} style={inputStyle} />
          </div>
        </div>
        <div>
          <div style={leftCol}>
            Email*
          </div>
          <div style={rightCol}>
            <input onChange={change} name="email" value={email} style={inputStyle} />
          </div>
        </div>
        <div>
          <div style={leftCol}>
            Mobile Number*
          </div>
          <div style={rightCol}>
            <input onChange={change} name="phone" value={phone} style={inputStyle} />
          </div>
        </div>
        <div style={leftCol}>
          *required field
        </div>
      </div>
      <div style={summary}>
        <div syle={timeStyleA}>
          When:
        </div>
        <div style={timeStyleB}>
          {date}
          {' at '}
          {time}
        </div>
        <div style={placeStyleA}>
          Place:
        </div>
        <div style={placeStyleB}>
          {name}
          <br />
          {address}
          <br />
          {addressString}
        </div>
        <div syle={guestStlyeA}>
          Party:
        </div>
        <div style={guestStlyeB}>
          {count}
          {' '}
          People
        </div>
        <div style={editStyle}>
          <div role="button" tabIndex={0} onClick={back} onKeyPress={back}>
              EDIT
          </div>
        </div>
      </div>
      {isValid
        ? (
          <button type="submit" onClick={book} style={findTableButton}>
            Book Appointment
          </button>
        )
        : (
          <button type="submit" onClick={notValid} style={findTableButton}>
            Not complete
          </button>
        )
      }
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
  count: PropTypes.string.isRequired,
  back: PropTypes.func.isRequired,
};

export default LevelThree;
