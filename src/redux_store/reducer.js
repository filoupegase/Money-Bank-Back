import initialState from './initialState';
import { EDIT_MODE, USER_INFO_SUCCESS } from './actionType';


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      };
    case USER_INFO_SUCCESS:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
    default:
      return state;
  }
};

export default reducer;