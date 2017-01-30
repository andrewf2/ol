import React from 'react';
import { shallow } from 'enzyme';
import BusinessList from '../widgets/BusinessList.jsx';
var businesses = require('../../../mocks/businesses.js').businesses

describe('<BusinessList />', () => {
  it('should render <BusinessList /> component with list items', () => {
    const wrapper = shallow(<BusinessList businesses = {businesses} />);
    expect(wrapper.props().children[1].type).toEqual("li");
    expect(wrapper.props().children).toHaveLength(50);

  });

  it('should take an array of 50 businesses for its props', () => {
    const wrapper = shallow(<BusinessList businesses = {businesses}/>);
    expect(wrapper.instance().props['businesses']).toHaveLength(50);
  });

});