import {handleActions} from 'redux-actions';

import actions from '../actions/boardsActions';


const {
    getBoardsRequest,
    getBoardsSuccess,
    getBoardsFailure,
    getBoardRequest,
    getBoardSuccess,
    getBoardFailure,
    addBoardFailure
} = actions;

const initialState = {
    boards: [],
    board: null,
    isLoading: false,
    error: null
};

const getBoardsRequestHandle = (state) => ({
    ...state,
    isLoading: true,
    error: null
});
const getBoardsSuccessHandle = (state, action) => ({
    ...state,
    isLoading: false,
    boards: action.payload,
    error: null
});
const getBoardsFailureHandle = (state, action) => ({
    ...state,
    isLoading: false,
    boards: [],
    error: action.payload.error
});
const getBoardRequestHandle = (state) => ({
    ...state,
    isLoading: true,
    error: null,
});
const getBoardSuccessHandle = (state, action) => ({
    ...state,
    isLoading: false,
    board: action.payload,
    error: null,
});
const getBoardFailureHandle = (state, action) => ({
    ...state,
    isLoading: false,
    board: null,
    error: action.payload.error,
});

export default handleActions({
    [getBoardsRequest]: getBoardRequestHandle,
    [getBoardsSuccess]: getBoardsSuccessHandle,
    [getBoardsFailure]: getBoardsFailureHandle,
    [getBoardRequest]: getBoardRequestHandle,
    [getBoardSuccess]: getBoardSuccessHandle,
    [getBoardFailure]: getBoardSuccessHandle,
}, initialState);
