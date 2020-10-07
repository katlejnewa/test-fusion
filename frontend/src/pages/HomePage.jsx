import React, {memo, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from '../components/Board';
import Modal from "../components/Modal";
import Button from "@material-ui/core/Button";

const HomePage = () => {
    const [ isVisible, setIsVisible ] = useState(false);

    const dispatch = useDispatch();
    // const boards = useSelector(state => state.boardsReducer.boards);

    useEffect(()=>{
        //dispatch(getBoardsRequest());
    },[]);

    const addBoard = (name) => {

    }

    return(
        <div>
            <Button onClick={() => setIsVisible(true)} size="small">Добавить доску</Button>
            {[].map( item =>
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