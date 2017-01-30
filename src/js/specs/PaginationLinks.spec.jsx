import React from 'react';
import { shallow } from 'enzyme';
import PaginationLinks from '../widgets/PaginationLinks.jsx';

describe('<PaginationLinks />', () => {
  it('should render <PaginationLinks /> component with a buttons', () => {
    const wrapper = shallow(<PaginationLinks />);
    expect(wrapper.props().children[0].type).toEqual("div");
    expect(wrapper.props().children[0].props.children.type).toEqual("button");
    expect(wrapper.props().children[0].props.children.props.children).toEqual("Previous Page");
    expect(wrapper.props().children[2].props.children.props.children).toEqual("Next Page");
  });

  it('should call the onclick functions when buttons are clicked',() =>{
  	const wrapper = shallow(<PaginationLinks />);
  	const prevPageButton = wrapper.find('div').children().find('button').at(0);
  	const nextPageButton = wrapper.find('div').children().find('button').at(1);
  	
  	expect(nextPageButton.props().onClick['__reactBoundMethod'].name).toEqual("nextPage");
  	expect(prevPageButton.props().onClick['__reactBoundMethod'].name).toEqual("goBack");
  	prevPageButton.find('button').simulate('click');
  	expect(prevPageButton.props().onClick['__reactBoundMethod']).toHaveBeenCalled;
  	nextPageButton.find('button').simulate('click');
  	expect(nextPageButton.props().onClick['__reactBoundMethod']).toHaveBeenCalled;
  })


});