// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';


test('renders counter message', () => {
  render(<Counter />);
  const countermessage = screen.getByText(/counter/i);
  expect(countermessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const inc = screen.getByRole('button', {name: '+'});
  fireEvent.click(inc);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const dec = screen.getByRole('button', {name: '-'});
  fireEvent.click(dec);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('-1');
});
