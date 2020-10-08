import {
    put,
    call,
    takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';

import actions from '../actions/boardsActions';

const {
    getBoardsRequest,
    getBoardsSuccess,
    getBoardsFailure,
    getBoardRequest,
    getBoardSuccess,
    getBoardFailure,
    addBoardRequest,
    addBoardFailure,
    deleteBoardRequest,
    deleteBoardFailure,
} = actions;

const apiHost = process.env.REACT_APP_API_HOST;

const HANDLERS = {
    * [getBoardsRequest]() {
        try {
            const { data } = yield call(axios, {
                method: 'get',
                url: `${apiHost}boards`,
                headers: { 'content-type': 'application/json' },
            });
            yield put(getBoardsSuccess(data));
        } catch (e) {
            yield put(getBoardsFailure(e));
        }
    },
    * [getBoardRequest](action) {
        try {
            const { data } = yield call(axios, {
                method: 'get',
                url: `${apiHost}boards/${action.payload}`,
                headers: { 'content-type': 'application/json' },
            });
            yield put(getBoardSuccess(data));
        } catch (e) {
            yield put(getBoardFailure(e));
        }
    },
    * [addBoardRequest](action) {
        try {
            yield call(axios, {
                method: 'post',
                url: `${apiHost}boards/`,
                headers: { 'content-type': 'application/json' },
                data: action.payload,
            });
            yield put(getBoardsRequest());
        } catch (e) {
            yield put(addBoardFailure(e));
        }
    },
    * [deleteBoardRequest](action) {
        try {
           yield call(axios, {
                method: 'delete',
                url: `${apiHost}boards/${action.payload}`,
                headers: { 'content-type': 'application/json' },
            });
            yield put(getBoardsRequest());
        } catch (e) {
            yield put(deleteBoardFailure(e));
        }
    },
};

export default function* boardsSagas() {

    for (const key in HANDLERS) {
        if (Object.prototype.hasOwnProperty.call(HANDLERS, key)) {
            yield takeEvery(key, HANDLERS[key]);
        }
    }
}
