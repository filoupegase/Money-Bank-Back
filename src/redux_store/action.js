import { EDIT_MODE, USER_INFO_SUCCESS } from './actionType';
import dataBasePath from '../services/dataBasePath';


export const editingMode = () => ({
  type: EDIT_MODE
});

export const userInfo = () => {
  return (dispatch) => {
    dataBasePath.post('user/profile', {},
    /*    { headers: { Authorization: `Bearer` + localStorage.getItem('token') } }*/
    )
        .then((res) => {
          console.log(res);
          dispatch({
            type: USER_INFO_SUCCESS,
            payload: {
              firstName: res.data.body.firstName,
              lastName: res.data.body.lastName
            }
          });
        })
        .catch((error) => {
          console.log('Error post userInfo :', error);
        });
  };
};