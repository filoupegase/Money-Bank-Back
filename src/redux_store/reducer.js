import initialState from './initialState';
import { EDIT_MODE } from './actionType';


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      };
    default:
      return state;
  }
};

export default reducer;