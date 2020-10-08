import { createActions } from 'redux-actions';

const TYPES = [
    'GET_BOARDS_REQUEST',
    'GET_BOARDS_SUCCESS',
    'GET_BOARDS_FAILURE',

    'GET_BOARD_REQUEST',
    'GET_BOARD_SUCCESS',
    'GET_BOARD_FAILURE',

    'ADD_BOARD_REQUEST',
    'ADD_BOARD_FAILURE',

    'DELETE_BOARD_REQUEST',
    'DELETE_BOARD_FAILURE',
];

export default createActions(...TYPES);
