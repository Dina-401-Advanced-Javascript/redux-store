import superagent from 'superagent';

//products reducer
let initialState = {
  products: []
};

export const get = () => dispatch => {
  return superagent.get('https://dina-auth-api.herokuapp.com/api/v1/products')
    .then(response => {
      response.body.forEach(product => {
        product.inCart = 0;
      });
      dispatch(getProducts({ products: response.body }));;
    })
}

const getProducts = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}

export const put = (product, number) => dispatch => {
  console.log('in put, and here is the product: ', product);
  let updatedProduct = { ...product, quantity: product.quantity + number }
  return superagent.put(`https://dina-auth-api.herokuapp.com/api/v1/products/${updatedProduct._id}`)
    .send(updatedProduct)
    .then(response => {
      console.log('in put - response.body = ', response.body)
      switch (number) {
        case -1:
          dispatch(addToCart(response.body));
          break;
        case 1:
          dispatch(removeOneFromCart(response.body));
          break;
        default:
          dispatch(removeAllFromCart(response.body));
          break;
      }

    })
}

export const removeOneFromCart = (product) => {
  // console.log('removing one from cart!')
  return {
    type: 'REMOVEONEFROMCART',
    payload: product
  }
}

export const removeAllFromCart = (product) => {
  // console.log('removing all from cart!')
  return {
    type: 'REMOVEALLFROMCART',
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
  let newArray = [];
  switch (type) {
    case 'GET':
      console.log({ payload });
      //TODO: figure out a way to make this O(n) instead of O(n^2)
      payload.products.forEach((product, index) => {
        state.products.forEach((stateProduct) => {
          if (product._id === stateProduct._id)
            product.inCart = stateProduct.inCart;
        })
      });
      return payload;
    // case 'PUT':
    //   console.log({ payload });
    //   //i think here i need to return something else
    //   return payload;
    case 'REMOVEALLFROMCART':
      newArray = state.products.map((product) => {
        if (product._id === payload._id) {
          return { ...product, quantity: product.quantity + product.inCart, inCart: 0 };
        }
        else
          return product;
      })
      return { products: newArray };
    case 'REMOVEONEFROMCART':
      newArray = state.products.map((product) => {
        if (product._id === payload._id) {
          return { ...product, quantity: product.quantity + 1, inCart: product.inCart - 1 };
        }
        else
          return product;
      })
      return { products: newArray };
    case 'ADDTOCART':
      // console.log('in ADDTOCART switch', state.products);
      newArray = state.products.map((product) => {
        if (product._id === payload._id) {
          // console.log('in if statement!!!', { product });
          // const foo = put({ ...product, quantity: product.quantity - 1 });
          // console.log(foo);
          return { ...product, quantity: product.quantity - 1, inCart: product.inCart + 1 };
        }
        else
          return product;
      })
      console.log(newArray);
      return { products: newArray };
    default:
      return state;
  }
}

export default productReducer;