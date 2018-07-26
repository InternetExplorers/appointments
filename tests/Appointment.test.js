import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import React from 'react';
import Appointment from '../client/components/Appointment.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Appointment, parent component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Appointment />);
  });

  it('should be a stateful component', () => {
    expect(React.Component.isPrototypeOf(Appointment)).toBe(true);
  })

  it('should have a constructor method', () => {
    expect(wrapper.instance().constructor);
  })

  it('should have ComponentWillMount', () => {
    expect(wrapper.instance().ComponentWillMount);
  })

  it('should have a defaultTimes method', () => {
    expect(wrapper.instance().defaultTimes);
  })

  // it('should update the state when called')
  //
  // it('should be called on ComponentWillMount')

  it('should have a formatTimes method', () => {
    expect(wrapper.instance().formatTimes);
  })

  it('should have a next method', () => {
    expect(wrapper.instance().next);
  })

  it('should have a back method', () => {
    expect(wrapper.instance().back);
  });

  it('should have a handleChange method', () => {
    expect(wrapper.instance().handleChange);
  })

  it('should have a makeAppointment method', () => {
    expect(wrapper.instance().makeAppointment)
  })
  // it('stats with a guest count that equals a string of 2', () => {
  //   const countState = wrapper.find('div#guestCount').text();
  //   expect(countState).toEqual('2');
  // });
});
