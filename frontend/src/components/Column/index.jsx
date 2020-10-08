import React, {memo, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import CardElement from '../CardElement';
import cardsActions from '../../store/actions/cardsActions';
import actions from '../../store/actions/columnsActions'

const { addCardRequest } = cardsActions;
const { deleteColumnRequest } = actions;

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: 'auto'
    },
    title: {
        fontSize: 14,
    },
});

const Column = ({ name, id, cards, boardId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [ isVisible, setIsVisible ] = useState(false);
    const deleteColumn= () => {
       dispatch(deleteColumnRequest({id, boardId}))
    };

    const addCard = (name) => {
        setIsVisible(false);
       dispatch(addCardRequest({name, columnId: id, boardId}));
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {name}
                </Typography>
                <div className="cards">
                    {cards.map( item => (
                        <CardElement
                            key={item.id}
                            name={item.name}
                            boardId={boardId}
                            id={item.id}
                        />)
                    )}
                </div>
            </CardContent>
            <CardActions>
                <Button onClick={deleteColumn} size="small">Удалить</Button>
                <Button onClick={() => setIsVisible(true)} size="small">Добавить карточку</Button>
            </CardActions>
            <Modal isVisible={isVisible} saveData={addCard} handleClose={() => setIsVisible(false)}/>
        </Card>
    );

};

Column.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
    boardId: PropTypes.number.isRequired,
    cards: PropTypes.array,
};

Column.defaultProps = {
    name: '',
    cards: []
};
export default memo(Column);