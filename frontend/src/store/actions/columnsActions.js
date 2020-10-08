import { createActions } from 'redux-actions';

const TYPES = [
    'ADD_COLUMN_REQUEST',
    'ADD_COLUMN_FAILURE',

    'DELETE_COLUMN_REQUEST',
    'DELETE_COLUMN_FAILURE',
];

export default createActions(...TYPES);
