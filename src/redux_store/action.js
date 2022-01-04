import {
  EDIT_MODE,
  USER_INFO_SUCCESS,
  USER_INFO_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST
} from './actionType';
import dataBasePath from '../services/dataBasePath';


let token = '';

export const editingMode = () => ({
  type: EDIT_MODE
});

export const logout = () => ({
  type: LOGOUT_REQUEST
});

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dataBasePath.post('user/login', { email, password })
        .then((res) => {
          token = res.data.body.token;
          localStorage.setItem('token', token);
          dispatch({ type: LOGIN_SUCCESS, payload: { email, token } });
        })
        .catch((error) => {
          dispatch({ type: LOGIN_ERROR });
          console.log('Error post loginRequest :', error);
        });
  };
};

export const getUserProfile = () => {
  return (dispatch) => {
    dataBasePath.post('user/profile', {}, {
          headers: {
            Authorization: `Bearer` + localStorage.getItem('token')
          }
        }
    )
        .then((res) => {
          dispatch({
            type: USER_INFO_SUCCESS,
            payload: {
              firstName: res.data.body.firstName,
              lastName: res.data.body.lastName
            }
          });
        })
        .catch((error) => {
          dispatch({ type: USER_INFO_ERROR });
          console.log('Error post userInfo :', error);
        });
  };
};