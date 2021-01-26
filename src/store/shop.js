// shop reducer

let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: ''
};

// actions
export const changeCategory = (newCategory) => {
  return {
    type: 'CHANGECATEGORY',
    payload: newCategory
  }
}

// export a function that has two parameters, state and action
// action has both type and payload in it
// switch statement to determijne what the type is
// the default return is state

const shop = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'CHANGECATEGORY':
      return { ...state, activeCategory: payload };

    // case 'INCREMENT':
    //   // increment the votes for the candidate
    //   let candidates = state.candidates.map(candidate => {
    //     // find the candidate who was click on
    //     if (candidate.name === payload) {
    //       // increment the vote
    //       return { name: candidate.name, votes: candidate.votes + 1 }
    //     }
    //     return candidate;
    //   });

    //   console.log('inital state', initialState, candidates);
    //   // initialState.candidates = candidates;
    //   // return initialState.candidates;
    //   return { ...state, candidates };

    // // return state;

    default:
      return state;
  }
}

export default shop;