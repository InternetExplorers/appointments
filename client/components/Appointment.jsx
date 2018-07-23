import React from 'react';
import $ from 'jquery';

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessId: this.props.id,
      businessName: null,
      businessAvailability: [],
      businessMax: null,
      businessAddress: null,
      businessCity: null,
      businessState: null,
      businessZip: null,
      businessPhone: null,
      businessHours: null,
      guestCount: 0,
      selectedDate: null,
      selectedTime: null,
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
    }
  }

  componentDidMount() {
    $.ajax({
      url:' /get',
      method: 'GET',
      dataType: 'json',
      success: (dbData) => {
        console.log('Server Data loaded!', dbData);
      }
    });
  }


  render() {
    return (
      <div>
        <h1>
          TEST
        </h1>
      </div>
    );
  }
}

export default Appointment;
