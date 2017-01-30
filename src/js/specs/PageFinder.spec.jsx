import React from 'react';
import { shallow } from 'enzyme';
import PageFinder from '../widgets/PageFinder.jsx';
var businesses = require('../../../mocks/businesses.js').businesses

describe('<PageFinder />', () => {
  it('should render <PageFinder /> component with list items', () => {
    const wrapper = shallow(<PageFinder businesses = {businesses} />);
    expect(wrapper.props().children[1].type).toEqual("input");

  });

  it('should take an array of 50 businesses for its props', () => {
    const wrapper = shallow(<PageFinder businesses = {businesses}/>);
    expect(wrapper.instance().props['businesses']).toHaveLength(50);
  });

  it('should call its onClick method when button is clicked', () => {
    const wrapper = shallow(<PageFinder businesses = {businesses}/>);
    const textField = wrapper.find('div').children().find('input');
    const searchButton = wrapper.find('div').children().find('button')
    expect(wrapper.instance().props['businesses']).toHaveLength(50);
    expect(textField).toBeDefined;
    wrapper.setState({ pageNum: 2, error:null,buttonState:'btn btn-primary' });
    searchButton.simulate('click');
    expect(searchButton.props().onClick['__reactBoundMethod']).toHaveBeenCalled;
  });



});