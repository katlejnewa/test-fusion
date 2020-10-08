import { createActions } from 'redux-actions';

const TYPES = [
    'ADD_CARD_REQUEST',
    'ADD_CARD_FAILURE',

    'DELETE_CARD_REQUEST',
    'DELETE_CARD_FAILURE',
];

export default createActions(...TYPES);
