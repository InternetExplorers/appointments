import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import notValid from './helperFunctions/notValid.jsx';

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #d90007;
`;

const FormCategory = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: 12.5px;
`;

const InputStyle = styled.input`
  width: 100%;
  font-size: 12.5px;
  padding: 6px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Summary = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  padding: 5%;
  padding-top: 10%;
  background: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  font-size: 14px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(40px, auto);
`;

const SummaryGrid = styled.div`
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`;

const Edit = styled.div`
  grid-column: 1 / 5;
  grid-row: 4;
  padding-top: 15px;
  color: #0073bb;
  width: 0;
`;

const Button = styled.button`
  width: 100%;
  color: white;
  background: #d90007;
  border-color: #8d0005;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
  border-radius: 5px;
  padding: 5px 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5em;
  height: 34px;
`;

const LevelTwo = (props) => {
  const {
    name, address, city, state, zip, change, date, time, book,
    first, last, email, phone, count, back,
  } = props;

  const addressString = `${city} ${state}, ${zip}`;

  let isValid = false;
  if (first && last && email && phone) {
    isValid = true;
  }

  return (
    <form>
      <div>
        <Title>
          Confirm Reservation
        </Title>
        <FormCategory>
          First Name*
          <InputStyle id="inputFirstName" onChange={change} name="firstName" value={first} />
        </FormCategory>
        <FormCategory>
          Last Name*
          <InputStyle id="inputLastName" onChange={change} name="lastName" value={last} />
        </FormCategory>
        <FormCategory>
          Email*
          <InputStyle id="inputEmail" onChange={change} name="email" value={email} />
        </FormCategory>
        <FormCategory>
          Mobile Number*
          <InputStyle id="inputPhone" onChange={change} name="phone" value={phone} />
        </FormCategory>
        <FormCategory>
          *required field
        </FormCategory>
      </div>
      <Summary>
        <SummaryGrid id="whenSummaryKey" column={'1 / 5'} row={'1'}>
          When:
        </SummaryGrid>
        <SummaryGrid id="whenSummaryPropert" column={'2 / 5'} row={'1'}>
          {date}
          {' at '}
          {time}
        </SummaryGrid>
        <SummaryGrid id="guestCountSummaryKey" column={'1 / 5'} row={'2'}>
          Party:
        </SummaryGrid>
        <SummaryGrid id="guestCountSummaryProperty" column={'2'} row={'2'}>
          <div id="countCorrect">
            {count}
            {' '}
            {count === '1' ? 'Person' : 'People'}
          </div>
        </SummaryGrid>
        <SummaryGrid id="placeSummaryKey" column={'1 / 5'} row={'3'}>
          Place:
        </SummaryGrid>
        <SummaryGrid id="placeSummaryProperty" column={'2 / 5'} row={'3 / 5'}>
          {name}
          <br />
          {address}
          <br />
          {addressString}
        </SummaryGrid>
        <Edit id="editSummary" role="button" tabIndex={0} onClick={back} onKeyPress={back}>
          EDIT
        </Edit>
      </Summary>
      {isValid
        ? (
          <Button id="submitValid" type="submit" onClick={book}>
            Book Appointment
          </Button>
        )
        : (
          <Button id="submitInvalid" type="submit" onClick={notValid}>
            Not complete
          </Button>
        )
      }
    </form>
  );
};

LevelTwo.propTypes = {
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

export default LevelTwo;
