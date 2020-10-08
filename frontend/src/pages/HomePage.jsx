import React, {memo, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Board from '../components/Board';
import Modal from '../components/Modal';
import actions from '../store/actions/boardsActions';

const { getBoardsRequest, addBoardRequest } = actions;

const HomePage = () => {
    const [ isVisible, setIsVisible ] = useState(false);

    const dispatch = useDispatch();
    const boards = useSelector(state => state.boardsReducers.boards);

    useEffect(() => {
        dispatch(getBoardsRequest());
    },[]);

    const addBoard = (name) => {
        setIsVisible(false);
        dispatch(addBoardRequest({name}));
    };

    return(
        <div>
            <Button onClick={() => setIsVisible(true)} size="small">Добавить доску</Button>
                {boards.map( item =>
                <Board
                    title={item.title}
                    id={item.id}
                    key={item.id}
                />)
                }
            <Modal isVisible={isVisible} saveData={addBoard} handleClose={() => setIsVisible(false)}/>
        </div>
    )
}
export default memo(HomePage);