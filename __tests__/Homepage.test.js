import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Homepage from '../src/Components/Homepage/Homepage'
// test Homepage component
configure({ adapter: new Adapter() });

describe('<CommentList />', () => {
  const wrapper = shallow(<Homepage />);
  it('should have a comment title in the webpage', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });
  
  it('should have a title that with the matching text', () => {
    expect(wrapper.find('h1').text()).to.equal('Welcome to GetItDone 2');
  });
  // matching props
  it('should have a label with htmlfor "name" asking for username', () => {
    expect(wrapper.find('[htmlFor="name"]').text()).to.equal('Enter your username:');
  })

  it('should have a input with a id "name" for setting username', () => {
    expect(wrapper.find('[id="name"]').text());
  })
});
