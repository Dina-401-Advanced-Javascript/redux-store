import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../app';

render(<App />);

test('Can add an item to the cart', () => {

  const category = screen.getByTestId('pillows');
  fireEvent.click(category);
  const button = screen.getByTestId('10Button');
  fireEvent.click(button);
  const cartLinkInHeader = screen.getByTestId('cartLink');

  //the cart number in the header should update
  expect(cartLinkInHeader).toHaveTextContent('Cart (1)');

  fireEvent.click(cartLinkInHeader);

  const cartItems = screen.getByTestId('10InStock');
  //the cart page should have the item with an available number that is decremented 998 not 999
  expect(cartItems).toHaveTextContent('Available: 998')

});


// test('Can remove an item from the cart', () => {
//   const removeFromCart = screen.getByTestId('10RemoveButton');
//   fireEvent.click(removeFromCart);

//   const cartLinkInHeader = screen.getByTestId('cartLink');
//   expect(cartLinkInHeader).toHaveTextContent('Cart (0)');

// });