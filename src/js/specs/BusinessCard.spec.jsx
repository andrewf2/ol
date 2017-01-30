import React from 'react';
import { shallow } from 'enzyme';
import BusinessCard from '../widgets/BusinessCard.jsx';

var business = require('../../../mocks/businesses.js').businesses[0]

describe('<BusinessCard />', () => {
  it('should render <BusinessCard /> component with business data', () => {
    const wrapper = shallow(<BusinessCard business = {business} />);
    expect(wrapper.props().children[0].type).toEqual("h6");
    expect(wrapper.props().className).toEqual("col-xs-12");
  });

  it('should take a business with an id of 0 for its props', () => {
    const wrapper = shallow(<BusinessCard business = {business} />);
    expect(wrapper.instance().props['business'].id).toEqual(0);
  });

});