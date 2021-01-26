
//category reducer
let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: ''
}

export const changeCategory = (newCategory) => {
  return {
    type: 'CHANGECATEGORY',
    payload: newCategory
  }
}

const categoryReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'CHANGECATEGORY':
      return { ...state, activeCategory: payload };
    default:
      return state;
  }
}

export default categoryReducer;