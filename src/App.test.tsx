import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement:HTMLCollectionOf<Element> = container.getElementsByClassName('App-header');
  // console.log(linkElement)
  const ele = screen.getByText('Playground')
  expect(ele).toBeDefined()
});
