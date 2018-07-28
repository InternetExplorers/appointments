import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import LevelOne from '../client/components/LevelOne.jsx';
import getGuestCount from '../client/components/helperFunctions/getGuestCount.jsx';

enzyme.configure({ adapter: new Adapter() });

  describe('LevelOne, a child component', () => {
    it('should render 3 dropdown menus, and a submit button', () => {
      const levelOneComponent = shallow(
        <LevelOne
          nextTwoWeeks={["July 26, 2018", "July 27, 2018", "July 28, 2018", "July 29, 2018", "July 30, 2018", "July 31, 2018", "August 1, 2018", "August 2, 2018", "August 3, 2018", "August 4, 2018", "August 5, 2018", "August 6, 2018", "August 7, 2018", "August 8, 2018"]}
          times={["9:30 AM", "10:30 AM", "11:30 AM", "12:30 PM", "1:30 PM", "2:30 PM", "3:30 PM"]}
          max={5}
          change={(() => { null })()}
          next={(() => { null })()}
          count={'2'}
          date={'July 26, 2018'}
          time={'9:30 AM'}
        />
      );

      expect(toJson(levelOneComponent)).toMatchSnapshot();
    });

    it('getGuestCount should return an array of numbers, or null', () => {
      expect(getGuestCount(100).length).toEqual(12);
      expect(getGuestCount(50).length).toEqual(12);
      expect(getGuestCount(2).length).toEqual(2);
      expect(getGuestCount(3).length).toEqual(3);
      expect(getGuestCount(4).length).toEqual(4);
      expect(getGuestCount(-5)).toEqual(null);
      expect(getGuestCount(0).length).toEqual(0);
      expect(getGuestCount('5')).toEqual(null);
      expect(getGuestCount('')).toEqual(null);
      expect(getGuestCount()).toEqual(null);
      expect(getGuestCount(true)).toEqual(null);
      expect(getGuestCount(false)).toEqual(null);

      const arrayOfNumber = getGuestCount(12);
      const allNumbers = [];
      arrayOfNumber.forEach(countValue => {
        if (typeof countValue === 'number') {
          allNumbers.push(countValue);
        }
      });
      expect(allNumbers.length).toEqual(12);
    });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LevelOne
        nextTwoWeeks={["July 26, 2018", "July 27, 2018", "July 28, 2018", "July 29, 2018", "July 30, 2018", "July 31, 2018", "August 1, 2018", "August 2, 2018", "August 3, 2018", "August 4, 2018", "August 5, 2018", "August 6, 2018", "August 7, 2018", "August 8, 2018"]}
        times={["9:30 AM", "10:30 AM", "11:30 AM", "12:30 PM", "1:30 PM", "2:30 PM", "3:30 PM"]}
        max={5}
        change={(() => { console.log('dummy') })()}
        next={(() => { console.log('dummy') })()}
        count={'2'}
        date={'July 26, 2018'}
        time={'9:30 AM'}
      />
    );
  });

  it('should render one correct css wrapper', () => {
    expect(wrapper.find('div#viewOne').exists()).toEqual(true);
  });

  it('should render 3 select options and a button', () => {
    expect(wrapper.find('select#selectedDate').exists()).toEqual(true);
    expect(wrapper.find('select#selectedTime').exists()).toEqual(true);
    expect(wrapper.find('select#guestCount').exists()).toEqual(true);
    expect(wrapper.find('button').exists()).toEqual(true);
  });
});
