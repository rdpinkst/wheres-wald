import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const picElement = screen.getByAltText('busy waldo')
  expect(picElement).toBeInTheDocument();
});
