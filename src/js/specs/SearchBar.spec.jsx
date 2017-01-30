import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../widgets/SearchBar.jsx';
import ReactTestUtils from 'react-addons-test-utils';

var businesses = require('../../../mocks/businesses.js').businesses

describe('<SearchBar />', () => {
  it('should render <SearchBar /> when a text field', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.props().children[1].type).toEqual("input");
  });

  it('should take an array of 50 businesses for its props', () => {
    const wrapper = shallow(<SearchBar businesses = {businesses}/>);
    expect(wrapper.instance().props['businesses']).toHaveLength(50);
  });

  it('should call its onChange method as words are type', () => {
    const wrapper = shallow(<SearchBar businesses = {businesses}/>);
    const textField = wrapper.find('div').children().find('input')
    expect(wrapper.instance().props['businesses']).toHaveLength(50);
    textField.simulate('keyDown',{keyCode:40});
    expect(textField.props().onChange['__reactBoundMethod']).toHaveBeenCalled;
  });

});