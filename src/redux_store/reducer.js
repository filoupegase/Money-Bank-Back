import initialState from './initialState';


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'salut':
      return {
        initialState
      };
    default:
      return state;
  }
};

export default reducer;