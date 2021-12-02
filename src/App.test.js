import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import Header from './components/header/header.component';
import store from './redux/store';

test('render h1 element', () => {
  //render(<Header />);
  //expect(screen.getByText('Hello World')).toBeInTheDocument();
});
