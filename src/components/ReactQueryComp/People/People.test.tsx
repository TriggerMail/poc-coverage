import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../../App';

test('renders App Header', () => {
  const {container} = render(<App />);
  const linkElement:HTMLCollectionOf<Element> = container.getElementsByClassName('App-header');
  console.log(linkElement)
  expect(linkElement.length).toBe(1)
});
