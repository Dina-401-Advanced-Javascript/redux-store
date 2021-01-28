import superagent from 'superagent';

//products reducer
let initialState = {
  products: []
};
export const get = () => dispatch => {
  return superagent.get('https://dina-auth-api.herokuapp.com/api/v1/products')
    .then(response => {
      dispatch(getProducts(response.body))
    })
}

export const getProducts = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}

// export const deletePoke = (id) => dispatch => {
//   return superagent.delete(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(response => {
//       dispatch(deleteAction(response.body))
//     })
// }

// export const deleteAction = payload => {
//   return {
//     type: 'DELETE',
//     payload: payload
//   }
// }

export const removeOneFromCart = (product) => {
  console.log('removing one from cart!')
  return {
    type: 'REMOVEONEFROMCART',
    payload: product
  }
}

export const removeAllFromCart = (product) => {
  console.log('removing all from cart!')
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
  switch (type) {
    case 'GET':
      return payload;
    case 'REMOVEALLFROMCART':
      let newArray = state.products.map((product) => {
        if (product === payload) {
          return { ...product, inStock: product.inStock + product.inCart, inCart: 0 };
        }
        else
          return product;
      })
      return { products: newArray };
    case 'REMOVEONEFROMCART':
      newArray = state.products.map((product) => {
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
      // console.log(newArray2);
      return { products: newArray2 };
    default:
      return state;
  }
}

export default productReducer;