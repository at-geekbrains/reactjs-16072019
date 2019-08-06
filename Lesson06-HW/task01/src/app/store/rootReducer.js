// Корневой редьюсер - собирает остальные
import { combineReducers } from 'redux';
import usersReducer from './users/usersReducer.js';

export default combineReducers ({
  usersState: usersReducer // стейт от юзерского редюсера
});