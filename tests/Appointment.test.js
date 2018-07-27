import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import React from 'react';
import Appointment from '../client/components/Appointment.jsx';
import ShallowRenderer from 'react-test-renderer/shallow';


enzyme.configure({ adapter: new Adapter() });

describe('Appointment, parent component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Appointment />);
  });

  it('should be a stateful component', () => {
    expect(React.Component.isPrototypeOf(Appointment)).toBe(true);
  });


  it('should have a "constructor" method', () => {
    expect(wrapper.instance().constructor);
  });

  it('should render the correct keys for state', () => {
    expect(wrapper.state().businessId).toBeGreaterThan(-1);
    expect(wrapper.state().businessName).toBe('');
    expect(wrapper.state().businessMax).toBe(0);
    expect(wrapper.state().businessAddress).toBe('');
    expect(wrapper.state().businessCity).toBe('');
    expect(wrapper.state().businessZip).toBe('');
    expect(Array.isArray(wrapper.state().timeRange)).toBe(true);
    expect(wrapper.state().guestCount).toBe('2');
    expect(wrapper.state().selectedDate).toBeDefined();
    expect(wrapper.state().selectedTime).toBeDefined();
    expect(wrapper.state().firstName).toBe('');
    expect(wrapper.state().lastName).toBe('');
    expect(wrapper.state().email).toBe('');
    expect(wrapper.state().phone).toBe('');
    expect(wrapper.state().lastName).toBe('');
    expect(Array.isArray(wrapper.state().nextTwoWeeks)).toBe(true);
    expect(wrapper.state().view).toBe(1);
  });

  it('should have "ComponentWillMount"', () => {
    expect(wrapper.instance().ComponentWillMount);
  });

  it('should have a "defaultTimes" method', () => {
    expect(wrapper.instance().defaultTimes);
  });

  it('should update the state when "defaultTimes" is called', () => {
    wrapper.instance().defaultTimes();
    expect(wrapper.state().nextTwoWeeks).toHaveLength(14);
  });

  it('should call "defaultTimes" method on ComponentWillMount', (done) => {
    wrapper.instance().defaultTimes = jest.fn();
    wrapper.instance().componentDidMount();
    done();
    expect(wrapper.instance().defaultTimes).toHaveBeenCalledTimes(1);
  });

  it('should have a "formatTimes" method', () => {
    expect(wrapper.instance().formatTimes);
  });

  it('should have a method, formatTimes that updates state', () => {
    const expected = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
    wrapper.instance().formatTimes("09:00:00", "17:00:00");
    expect(wrapper.state().timeRange).toEqual(expected);
  });

  it('should have a method, "formatTimes", that supplies a time slot every hour from opening, unless the final time slot is less than 60 minutes', () => {
    const expected = ["9:30 AM", "10:30 AM", "11:30 AM", "12:30 PM", "1:30 PM", "2:30 PM", "3:30 PM"];
    wrapper.instance().formatTimes("09:30:00", "17:00:00");
    expect(wrapper.state().timeRange).toEqual(expected);
  });

  it('should have a method, "formatTimes", that supplies a time slots before midnight', () => {
    const expected = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];
    wrapper.instance().formatTimes("17:00:00", "02:00:00");
    expect(wrapper.state().timeRange).toEqual(expected);
    expect(wrapper.state().selectedTime).toEqual(expected[0]);
  });

  it('should have a getguestcount method', () => {
    expect(wrapper.instance().getGuestCount);
  });

  it('should have a next method', () => {
    expect(wrapper.instance().next);
  });

  it('should have a next method that updates state incrementing by 1', (done) => {
    const expected = wrapper.state().view + 1;
    wrapper.instance().next();
    done();
    expect(wrapper.state().view).toEqual(expected);
  });

  it('should have a back method, the decriments state.view by 1', (done) => {
    const expected = wrapper.state().view - 1;
    wrapper.instance().back();
    done();
    expect(wrapper.state().view).toEqual(expected);
  });

  it('should have a handleChange method', () => {
    expect(wrapper.instance().handleChange);
  });

  it ('should have method, handleChange, that changes state', (done) => {
    const event = {target: {name: 'firstName', value: 'Jordan'}};
    wrapper.instance().handleChange(event);
    done();
    expect(wrapper.state().firstName).toEqual('Jordan');
  });

  it('should have a makeAppointment method', () => {
    expect(wrapper.instance().makeAppointment)
  });

  it('makeAppointment should call forceUpdate', (done) => {
    wrapper.instance().forceUpdate = jest.fn();
    wrapper.instance().makeAppointment();
    done();
    expect(wrapper.instance().forceUpdate).toHaveBeenCalledTimes(1);
  });
});


// it('makeAppointment should make as forceUpdate', (done) => {
//   wrapper.instance().forceUpdate = jest.fn();
//   wrapper.instance().makeAppointment();
//   done();
//   expect(wrapper.instance().forceUpdate).toHaveBeenCalledTimes(1);
// });


// it('stats with a guest count that equals a string of 2', () => {
//   const countState = wrapper.find('div#guestCount').text();
//   expect(countState).toEqual('2');
// });
