import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from '../../../pages/homepage/homepage.component';
describe("HomePage Component", () => {
  it("should render my component", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('div')).toMatchSnapshot();
  });
});
