import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from '../../../pages/artists/artists.component';
describe("Page Artists", () => {
  it("should render Artists component", () => {
    const wrapper = shallow(<MyComponent />);
    //console.log(wrapper.instance())   
    expect(wrapper.find('div')).toMatchSnapshot();
  });

});
