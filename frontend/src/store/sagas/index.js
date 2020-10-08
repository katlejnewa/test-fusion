import { all } from 'redux-saga/effects';
import columnsSagas from './columnsSagas';
import cardsSagas from './cardsSagas';
import boardsSagas from './boardsSagas';

export default function* staticSagas() {
    yield all([
        columnsSagas,
        cardsSagas,
        boardsSagas
    ]);
}