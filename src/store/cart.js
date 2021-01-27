// let initialState = {
//   cartProducts: []
// };

// export const addToCart = (product) => {
//   return {
//     type: 'ADDTOCART',
//     payload: product
//   }
// }

// const cart = (state = initialState, action) => {
//   let { type, payload } = action;
//   switch (type) {
//     case 'ADDTOCART':
//       // console.log('added to cart: ', payload);
//       return { cartProducts: [...state.cartProducts, payload] };

//     default:
//       return state;
//   }
// }

// export default cart;