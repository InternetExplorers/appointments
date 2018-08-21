import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import PropTypes from 'prop-types';
import LevelOne from './LevelOne.jsx';
import LevelTwo from './LevelTwo.jsx';

const outerShell = {
  width: '250px',
  padding: '20px',
  border: '1px solid lightGrey',
  borderRadius: '5px',
  fontFamily: 'Helvetica',
};

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.makeAppointment = this.makeAppointment.bind(this);

    const { id } = this.props;
    this.state = {
      businessId: id,
      businessName: '',
      businessMax: 0,
      businessAddress: '',
      businessCity: '',
      businessState: '',
      businessZip: '',
      timeRange: [],
      guestCount: '2',
      selectedDate: '',
      selectedTime: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      nextTwoWeeks: [],
      view: 1,
    };
  }

  componentDidMount() {
    this.defaultTimes();
    const { businessId } = this.state;
    $.ajax({
      url: `http://ec2-18-188-225-12.us-east-2.compute.amazonaws.com:3003/business/${businessId}/appointments`,
      method: 'GET',
      dataType: 'json',
      success: (dbData) => {
        this.setState({
          businessName: dbData[0].name,
          businessMax: dbData[0].guest_max,
          businessAddress: dbData[0].address,
          businessCity: dbData[0].city,
          businessState: dbData[0].state,
          businessZip: dbData[0].zip,
        });
        this.formatTimes(dbData[0].opens, dbData[0].closes);
      },
    });
  }

  defaultTimes() {
    const twoWeeks = [];
    for (let i = 0; i < 14; i += 1) {
      twoWeeks.push(moment().add(i, 'days').format('LL'));
    }
    const defaultDate = twoWeeks[0];
    this.setState({
      nextTwoWeeks: twoWeeks,
      selectedDate: defaultDate,
    });
  }

  formatTimes(opens, closes) {
    const mutableOpens = opens;
    const mutableCloses = closes;
    const timesArray = [moment(mutableOpens, 'HH:mm:a').format('LT')];
    for (let j = 0; j < 12; j += 1) {
      const endHour = moment(mutableCloses, 'HH:mm:a');
      const currHour = moment(timesArray[timesArray.length - 1], 'HH:mm:a').add(1, 'h');
      if (endHour.isBefore(moment('04:00:00', 'HH:mm:a')) && currHour.isBefore(moment('24:00:00', 'HH:mm:a'))) {
        timesArray.push(currHour.format('LT'));
      } else if (currHour.isBefore(endHour.subtract(0.5, 'h'))) {
        timesArray.push(currHour.format('LT'));
      }
    }
    const defaultTime = timesArray[0];
    this.setState({
      timeRange: timesArray,
      selectedTime: defaultTime,
    });
  }

  next() {
    const { view } = this.state;
    this.setState({ view: view + 1 });
  }

  back() {
    const { view } = this.state;
    this.setState({ view: view - 1 });
  }

  handleChange(e) {
    const field = e.target.name;
    const target = e.target.value;
    this.setState({ [field]: target });
  }

  makeAppointment() {
    const {
      firstName, lastName, phone, email,
      businessId, selectedTime, selectedDate, guestCount,
    } = this.state;

    $.ajax({
      url: `http://ec2-18-188-225-12.us-east-2.compute.amazonaws.com:3003/business/${businessId}/make_appointment`,
      method: 'POST',
      data: {
        userDetails: {
          firstName,
          lastName,
          phone,
          email,
        },
        appointmentDetails: {
          businessId,
          customerId: null,
          time: selectedTime,
          date: selectedDate,
          count: guestCount,
        },
      },
      dataType: 'json',
    });
    this.forceUpdate();
  }

  render() {
    const {
      nextTwoWeeks, timeRange, businessMax, view,
      businessName, businessAddress, businessCity, businessState, businessZip,
      selectedDate, selectedTime, firstName, lastName, email, phone, guestCount,
    } = this.state;

    if (view === 1) {
      return (
        <div style={outerShell}>
          <LevelOne
            nextTwoWeeks={nextTwoWeeks}
            times={timeRange}
            max={businessMax}
            change={this.handleChange}
            next={this.next}
            count={guestCount}
            date={selectedDate}
            time={selectedTime}
          />
        </div>
      );
    }
    return (
      <div style={outerShell}>
        <LevelTwo
          date={selectedDate}
          time={selectedTime}
          name={businessName}
          address={businessAddress}
          city={businessCity}
          state={businessState}
          zip={businessZip}
          change={this.handleChange}
          book={this.makeAppointment}
          first={firstName}
          last={lastName}
          email={email}
          phone={phone}
          count={guestCount}
          back={this.back}
        />
      </div>
    );
  }
}

Appointment.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Appointment;
