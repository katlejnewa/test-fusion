import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '../components/Modal';
import actions from '../store/actions/boardsActions';
import columnsActions from '../store/actions/columnsActions';
import Column from '../components/Column';

const { getBoardRequest } = actions;
const { addColumnRequest } = columnsActions;

const BoardPage = () =>{
    const dispatch = useDispatch();
    const [ isVisible, setIsVisible ] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        dispatch(getBoardRequest(id))
    },[id])
    const board = useSelector(state => state.boardsReducers.board);
    const addColumn = (name) => {
        dispatch(addColumnRequest({name, boardId: id}))
        setIsVisible(false);
    }

    if(!board) return <div className="not-found">Страница не найдена</div>

    return(
        <div className="board-page">
            <Typography color="textSecondary" gutterBottom>
               Доска: {board.name}
            </Typography>
            <div className="btn-wrapper">
                <Button onClick={() => setIsVisible(true)} size="small">Добавить колонку</Button>
            </div>
            <div className="columns">
                {board.columns.map( item =>(
                    <Column
                        key={item.id}
                        cards={item.cards}
                        name={item.name}
                        boardId={id}
                        id={item.id}
                    />
                ))}
            </div>

            <Modal isVisible={isVisible} saveData={addColumn} handleClose={()=> setIsVisible(false)}/>
        </div>
    )
}
export default memo(BoardPage);