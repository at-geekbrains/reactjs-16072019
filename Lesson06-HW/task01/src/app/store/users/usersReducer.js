import Immutable from 'seamless-immutable';
import { GET_USER_SUCCESS, GET_USER_ERROR } from './usersActionTypes';

const initialState = Immutable({  
  users: [],
  error: null  
});

export default function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        users:action.users
      }
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}