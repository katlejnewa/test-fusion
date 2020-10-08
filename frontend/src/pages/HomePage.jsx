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

    useEffect(() => {
        dispatch(getBoardsRequest());
    },[]);

    const boards = useSelector(state => state.boardsReducers.boards);

    const addBoard = (name) => {
        setIsVisible(false);
        dispatch(addBoardRequest({name}));
    };

    return(
        <div>
            <div className="btn-wrapper">
                <Button onClick={() => setIsVisible(true)} size="small">Добавить доску</Button>
            </div>
               <div className="boards">
                   {boards.map( item =>
                       <Board
                           name={item.name}
                           id={item.id}
                           key={item.id}
                       />)
                   }
               </div>
            <Modal isVisible={isVisible} saveData={addBoard} handleClose={() => setIsVisible(false)}/>
        </div>
    )
}
export default memo(HomePage);