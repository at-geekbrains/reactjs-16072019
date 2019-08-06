import axios from 'axios';
import {GET_USER_SUCCESS, GET_USER_ERROR} from './usersActionTypes';

export function getUsers(){
    return async dispatch => {
        try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/users/')
                const users = [...response.data];
                dispatch(getUsersSuccess(users));
        } catch (e) {            
            dispatch(getUsersError(e));
        }        
    }
}

export function getUsersSuccess(users){
    return {
        type: GET_USER_SUCCESS,
        users: users
}
}

export function getUsersError(e){
    return {
        type: GET_USER_ERROR,
        error: e        
    }
}