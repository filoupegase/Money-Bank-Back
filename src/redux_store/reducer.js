import initialState from './initialState';
import {
  EDIT_MODE,
  USER_INFO_SUCCESS,
  USER_INFO_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST
} from './actionType';


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        logged: !state.logged,
        error: false,
        email: action.payload.email,
        token: action.payload.token
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: true
      };
    case USER_INFO_SUCCESS:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
    case USER_INFO_ERROR:
      return {
        ...state,
        error: true
      };
    case LOGOUT_REQUEST:
      return {
        initialState
      };
    default:
      return state;
  }
};

export default reducer;