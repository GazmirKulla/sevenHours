import {
    USER_LIST_GET,
    USER_LIST_GET_SUCCESS,
    USER_UPDATE
} from 'constants/actionTypes';

export const getUserList = () => ({
    type: USER_LIST_GET
});

export const getUserListSuccess = (data) => ({
    type: USER_LIST_GET_SUCCESS,
    payload: data
});

export const updateUser = (data) => ({
    type: USER_UPDATE,
    payload: data
});