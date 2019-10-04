import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
    USER_LIST_GET
} from "constants/actionTypes";

import {
    getUserListSuccess
} from "./actions";
const users = require('data/users.json');

const userListRequest = async () => {
    return users;
};

function* getUserList() {
    try {
        const response = yield call(userListRequest)
        yield put(getUserListSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

export function* watchGetUserList() {
    yield takeEvery(USER_LIST_GET, getUserList);
}


export default function* rootSaga() {
    yield all([
        fork(watchGetUserList)
    ]);
}