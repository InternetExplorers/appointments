import React from 'react';
import $ from 'jquery';
import moment from 'moment';

import LevelOne from './LevelOne.jsx';
import LevelThree from './LevelThree.jsx';


class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessId: Math.floor(Math.random() * Math.floor(100)),
      businessName: null,
      businessMax: null,
      businessAddress: null,
      businessCity: null,
      businessState: null,
      businessZip: null,
      timeRange: [],
      guestCount: 1,
      selectedDate: null,
      selectedTime: null,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      nextTwoWeeks: [],
      view: 1,
    };
  }

  componentDidMount() {
    const defaultTimes = () => {
      const twoWeeks = [];
      for (let i = 0; i < 14; i += 1) {
        twoWeeks.push(moment().add(i, 'days').format('LL'));
      }
      const defaultDate = twoWeeks[0];
      this.setState({
        nextTwoWeeks: twoWeeks,
        selectedDate: defaultDate,
      });
    };
    defaultTimes();

    const formatTimes = (opens, closes) => {
      const mutableOpens = moment(opens, 'HH:mm:a');
      const timesArray = [mutableOpens.format('LT')];
      for (let j = 0; j < 12; j += 1) {
        const endHour = moment(closes, 'HH:mm:a');
        const currHour = moment(timesArray[timesArray.length - 1], 'HH:mm:a').add(1, 'h');
        if (endHour.isBefore(moment('04:00:00', 'HH:mm:a')) && currHour.diff(endHour) <= 79200000) {
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
    };

    const { businessId } = this.state;
    $.ajax({
      url: `/${businessId}`,
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
        formatTimes(dbData[0].opens, dbData[0].closes);
      },
    });
  }

  render() {
    return (
      <div>
        Stretch Goal...
      </div>
    );
  }
}

export default Appointment;
