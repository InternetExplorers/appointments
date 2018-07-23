import React from 'react';
import $ from 'jquery';

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessId: 5,
      businessName: null,
      businessAvailability: [],
      businessMax: null,
      businessAddress: null,
      businessCity: null,
      businessState: null,
      businessZip: null,
      businessPhone: null,
      businessOpens: null,
      businessCloses: null,
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
      url:' /appointments/' + this.state.businessId,
      method: 'GET',
      dataType: 'json',
      success: (dbData) => {
        console.log('Server Data loaded!', dbData);
        this.setState({
          businessName: dbData.name,
          businessAvailability: `${dbData.opens} - ${dbData.closes}`,
          businessMax: dbData.guest_max,
          businessAddress: dbData.address,
          businessCity: dbData.city,
          businessState: dbData.state,
          businessZip: dbData.zip,
          businessPhone: dbData.phone,
          businessOpens: dbData.opens,
          businessCloses: dbData.closes,
        });
      }
    });
  }


  render() {
    return (
      <div>
        <div>
          {this.state.businessAvailability} <br />
          {this.state.businessName} <br />
          {this.state.businessMax} <br />
          {this.state.businessAddress} <br />
          {this.state.businessCity} <br />
          {this.state.businessState} <br />
          {this.state.businessZip} <br />
          {this.state.businessPhone} <br />
          {this.state.businessOpens} <br />
          {this.state.businessCloses} <br />
        </div>
        <div>
          <h1>
            TEST
          </h1>
        </div>
      </div>
    );
  }
}

export default Appointment;
