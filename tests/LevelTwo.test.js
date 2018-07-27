import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import React from 'react';
import LevelTwo from '../client/components/LevelTwo.jsx';
import notValid from '../client/components/helperFunctions/notValid.jsx'

enzyme.configure({ adapter: new Adapter() });

describe('LevelTwo, a child component to Appointment', () => {

  it('should import a notValid function', () => {
    const type = typeof notValid;
    expect(type).toEqual('function');
    notValid();
    expect(notValid()).toEqual(undefined);
  });

  it('should call back function when edit is clicked', () => {
    const spyFunction = jest.fn();
    let wrapper = shallow(
      <LevelTwo
        date={"July 26, 2018"}
        time={"10:30 AM"}
        name={"Cakesons"}
        address={"123"}
        city={"businessCity"}
        state={"businessState"}
        zip={"businessZip"}
        change={(() => { null })()}
        book={(() => { null })()}
        first={"firstName"}
        last={"lastName"}
        email={"email"}
        phone={"phone"}
        count={"1"}
        back={spyFunction}
      />
    );
    wrapper.find('div#edit').simulate('click');
    expect(spyFunction).toHaveBeenCalled();
  });

  it('handle change should be called when each input field has text added', () => {
    const spyFunction = jest.fn();
    let wrapper = shallow(
      <LevelTwo
        date={"July 26, 2018"}
        time={"10:30 AM"}
        name={"Cakesons"}
        address={"123"}
        city={"businessCity"}
        state={"businessState"}
        zip={"businessZip"}
        change={spyFunction}
        book={(() => { null })()}
        first={"firstName"}
        last={"lastName"}
        email={"email"}
        phone={"phone"}
        count={"1"}
        back={(() => { null })()}
      />
    );
    wrapper.find('input#inputFirstName').simulate('change');
    wrapper.find('input#inputLastName').simulate('change');
    wrapper.find('input#inputEmail').simulate('change');
    wrapper.find('input#inputPhone').simulate('change');

    expect(spyFunction).toHaveBeenCalledTimes(4);
  });



  it('should activate the submit function if forms are complete', () => {
    const spyFunction = jest.fn();
    let wrapper = shallow(
      <LevelTwo
        date={"July 26, 2018"}
        time={"10:30 AM"}
        name={"Cakesons"}
        address={"123"}
        city={"businessCity"}
        state={"businessState"}
        zip={"businessZip"}
        change={(() => { null })()}
        book={spyFunction}
        first={"firstName"}
        last={"lastName"}
        email={"email"}
        phone={"phone"}
        count={"1"}
        back={(() => { null })()}
      />
    );
    wrapper.find('button').simulate('click');
    expect(spyFunction).toHaveBeenCalled();
  })

  it('should render not complete function if fields are not complete', () => {
    const spyFunction = jest.fn();
    let wrapper = shallow(
      <LevelTwo
        date={"July 26, 2018"}
        time={"10:30 AM"}
        name={"Cakesons"}
        address={"123"}
        city={"businessCity"}
        state={"businessState"}
        zip={"businessZip"}
        change={(() => { null })()}
        book={spyFunction}
        first={""}
        last={""}
        email={""}
        phone={""}
        count={"1"}
        back={(() => { null })()}
      />
    );
    wrapper.find('button').simulate('click');
    expect(spyFunction).not.toHaveBeenCalled();
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LevelTwo
        date={"July 26, 2018"}
        time={"10:30 AM"}
        name={"Cakesons"}
        address={"123"}
        city={"businessCity"}
        state={"businessState"}
        zip={"businessZip"}
        change={(() => { null })()}
        book={(() => { null })()}
        first={"firstName"}
        last={"lastName"}
        email={"email"}
        phone={"phone"}
        count={"1"}
        back={(() => { null })()}
      />
    );
  });

  it('should render one form enclosing all elements', () => {
    expect(wrapper.find('form').exists()).toEqual(true);
  });

  it('should render 4 input fields an edit and a submit button', () => {
    expect(wrapper.find('input#inputFirstName').exists()).toEqual(true);
    expect(wrapper.find('input#inputLastName').exists()).toEqual(true);
    expect(wrapper.find('input#inputEmail').exists()).toEqual(true);
    expect(wrapper.find('input#inputPhone').exists()).toEqual(true);
    expect(wrapper.find('button').exists()).toEqual(true);
  });

  it('should say person, if reservation is for 1, people if otherwise', () => {
    expect(wrapper.find('div#guestCountSummary').text()).toEqual('1 Person');

    const numberOfPeople = '8';
    wrapper = shallow(
      <LevelTwo
        date={"July 26, 2018"}
        time={"10:30 AM"}
        name={"Cakesons"}
        address={"123"}
        city={"businessCity"}
        state={"businessState"}
        zip={"businessZip"}
        change={(() => { console.log('dummy') })()}
        book={(() => { console.log('dummy') })()}
        first={"firstName"}
        last={"lastName"}
        email={"email"}
        phone={"phone"}
        count={numberOfPeople}
        back={(() => { console.log('dummy') })()}
      />
    );
    expect(wrapper.find('div#guestCountSummary').text()).toEqual(numberOfPeople+ ' People');
  });
});
