import {
    put,
    call,
    takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';

import actions from '../actions/columnsActions';
import boardsAction from '../actions/boardsActions';

const { getBoardRequest } = boardsAction;
const {
    addColumnRequest,
    addColumnFailure,
    deleteColumnRequest,
    deleteColumnFailure
} = actions;

const apiHost = process.env.REACT_APP_API_HOST;

const HANDLERS = {
    * [addColumnRequest](action) {
        try {
            yield call(axios, {
                method: 'post',
                url: `${apiHost}columns/`,
                headers: { 'content-type': 'application/json' },
                data: action.payload,
            });
            yield put(getBoardRequest(action.payload.boardId));
        } catch (e) {
            yield put(addColumnFailure(e));
        }
    },
    * [deleteColumnRequest](action) {
        try {
            yield call(axios, {
                method: 'delete',
                url: `${apiHost}columns/${action.payload}`,
                headers: { 'content-type': 'application/json' },
            });
            yield put(getBoardRequest(action.payload.boardId));
        } catch (e) {
            yield put(deleteColumnFailure(e));
        }
    },
};

export default function* loginSaga() {
    for (const key in HANDLERS) {
        if (Object.prototype.hasOwnProperty.call(HANDLERS, key)) {
            yield takeEvery(key, HANDLERS[key]);
        }
    }
}
