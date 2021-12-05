import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe("Test Component App ", () => {
  it("should render my component", () => {
    const wrapper = <Provider store={store}> shallow(<App />);</Provider>
  });
});
