import React, {memo, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Modal from "../Modal";
export { default as CardElement } from '../Card';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
});

const Column = ({ title, id, cards }) => {
    const classes = useStyles();
    const [ isVisible, setIsVisible ] = useState(false);
    const deleteColumn= () => {
        /*
        *
        *
        * dispatch(deleteCard(id));
        * */
    }
    const addCard = (name) => {
        /*
     *
     *
     * dispatch(deleteCard({ columnId: id, name}));
     * */
    }


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                {[].map( item => {
                    <CardElement
                        key={item.id}
                        title={item.title}
                        id={item.id}
                    />
                })}
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
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
};

Column.defaultProps = {
    title: ''
};
export default memo(Card);