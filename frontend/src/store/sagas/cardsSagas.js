import {
    put,
    call,
    takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';

import actions from '../actions/cardsActions';
import boardsAction from '../actions/boardsActions';

const { getBoardRequest } = boardsAction;
const {
    addCardRequest,
    addCardFailure,
    deleteCardRequest,
    deleteCardFailure
} = actions;

const apiHost = process.env.REACT_APP_API_HOST;

const HANDLERS = {
    * [addCardRequest](action) {
        try {
            yield call(axios, {
                method: 'post',
                url: `${apiHost}cards/`,
                headers: { 'content-type': 'application/json' },
                data: action.payload,
            });
            yield put(getBoardRequest(action.payload.boardId));
        } catch (e) {
            yield put(addCardFailure(e));
        }
    },
    * [deleteCardRequest](action) {
        try {
            yield call(axios, {
                method: 'delete',
                url: `${apiHost}cards/${action.payload.id}`,
                headers: { 'content-type': 'application/json' },
            });
            yield put(getBoardRequest(action.payload.boardId));
        } catch (e) {
            yield put(deleteCardFailure(e));
        }
    },
};

export default function* cardsSagas() {
    for (const key in HANDLERS) {
        if (Object.prototype.hasOwnProperty.call(HANDLERS, key)) {
            yield takeEvery(key, HANDLERS[key]);
        }
    }
}
