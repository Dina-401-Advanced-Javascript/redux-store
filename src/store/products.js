//products reducer
let initialState = {
  products: [
    { name: '"Starry Night" Print', category: 'prints', price: 29.99, inStock: 999, inCart: 0 },
    { name: '"The Scream" Print', category: 'prints', price: 19.99, inStock: 999, inCart: 0 },
    { name: '"The Nomad" Print', category: 'prints', price: 9.99, inStock: 999, inCart: 0 },
    { name: 'Monet\'s "Lillies" Print', category: 'prints', price: 49.99, inStock: 999, inCart: 0 },
    { name: '"The Kiss" Print', category: 'prints', price: 24.99, inStock: 999, inCart: 0 },
    { name: '"The Last Supper" Print', category: 'prints', price: 39.99, inStock: 999, inCart: 0 },
    { name: 'Rainbow Flag Painting', category: 'originals', price: 1230, inStock: 1, inCart: 0 },
    { name: 'Aurora Painting', category: 'originals', price: 330, inStock: 1, inCart: 0 },
    { name: 'Night Sky Painting', category: 'originals', price: 596, inStock: 1, inCart: 0 },
    { name: 'Night Sky Pillow', category: 'pillows', price: 41.99, inStock: 999, inCart: 0 },
    { name: 'Aurora Pillow', category: 'pillows', price: 41.99, inStock: 999, inCart: 0 },
    { name: 'Mountains Pillow', category: 'pillows', price: 41.99, inStock: 999, inCart: 0 },
    { name: 'Tree of Life Pillow', category: 'pillows', price: 41.99, inStock: 999, inCart: 0 },
    { name: 'Rainbow Pillow', category: 'pillows', price: 41.99, inStock: 999, inCart: 0 },
    { name: 'Snow Pillow', category: 'pillows', price: 41.99, inStock: 999, inCart: 0 },
    { name: 'Beach Pillow', category: 'pillows', price: 41.99, inStock: 999, inCart: 0 },
  ]
};

export const removeFromCart = (product) => {
  console.log('removing from cart!')
  return {
    type: 'REMOVEFROMCART',
    payload: product
  }
}

export const addToCart = (product) => {
  console.log('adding to cart!')
  return {
    type: 'ADDTOCART',
    payload: product
  }
}

const productReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'REMOVEFROMCART':
      let newArray = state.products.map((product) => {
        if (product === payload) {
          return { ...product, inStock: product.inStock + 1, inCart: product.inCart - 1 };
        }
        else
          return product;
      })
      return { products: newArray };
    case 'ADDTOCART':
      let newArray2 = state.products.map((product) => {
        if (product === payload) {
          return { ...product, inStock: product.inStock - 1, inCart: product.inCart + 1 };
        }
        else
          return product;
      })
      console.log(newArray2);
      return { products: newArray2 };
    default:
      return state;
  }
}

export default productReducer;