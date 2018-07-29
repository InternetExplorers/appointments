import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import LevelTwo from '../client/components/LevelTwo.jsx';
import notValid from '../client/components/helperFunctions/notValid.jsx'

enzyme.configure({ adapter: new Adapter() });

describe('LevelTwo, a child component to Appointment', () => {
  it('should render 4 input fields with correct titles', () => {
    const levelTwoComponent = shallow(
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
    expect(toJson(levelTwoComponent)).toMatchSnapshot();
  });

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
    wrapper.find('#editSummary').simulate('click');
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
    wrapper.find('#inputFirstName').simulate('change');
    wrapper.find('#inputLastName').simulate('change');
    wrapper.find('#inputEmail').simulate('change');
    wrapper.find('#inputPhone').simulate('change');

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
    wrapper.find('#submitValid').simulate('click');
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
    wrapper.find('#submitInvalid').simulate('click');
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

  it('should render 4 input fields an edit', () => {
    expect(wrapper.find('#inputFirstName').exists()).toEqual(true);
    expect(wrapper.find('#inputLastName').exists()).toEqual(true);
    expect(wrapper.find('#inputEmail').exists()).toEqual(true);
    expect(wrapper.find('#inputPhone').exists()).toEqual(true);
  });

  it('should say person, if reservation is for 1, people if otherwise', () => {
    expect(wrapper.find('div#countCorrect').text()).toEqual('1 Person');

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
        change={(() => { null })()}
        book={(() => { null })()}
        first={"firstName"}
        last={"lastName"}
        email={"email"}
        phone={"phone"}
        count={numberOfPeople}
        back={(() => { null })()}
      />
    );
    expect(wrapper.find('div#countCorrect').text()).toEqual(`${numberOfPeople} People`);
  });
});
