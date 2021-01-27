
//category reducer
let initialState = {
  categories: [
    { name: 'prints', displayName: 'Art Prints' },
    { name: 'originals', displayName: 'Original Art' },
    { name: 'pillows', displayName: 'Pillows' }
  ],
  activeCategory: { name: '', displayName: '' }
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