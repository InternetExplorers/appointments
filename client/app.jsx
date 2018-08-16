import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from './components/Appointment.jsx';

const id = Number(window.location.pathname.slice(1, window.location.pathname.length - 1));
console.log(window.location.pathname.slice(1, window.location.pathname.length - 1));

ReactDOM.render(<Appointment id={id} />, document.getElementById('appointment'));
