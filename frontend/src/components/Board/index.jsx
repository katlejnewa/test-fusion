import React, {memo, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Column from '../Column';
import Modal from '../Modal';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
});

const Board = ({ title, id }) => {
    const classes = useStyles();
    const [ isVisible, setIsVisible ] = useState(false);

    const goToBoardPage = () => {
        //TODO: go to page id
    }

    const deleteBoard = () => {
        /*
     *
     *
     * dispatch(deleteBoard(id));
     * */
    };

    const addColumn = () => {

    };

    return (
        <Card className={classes.root} onClick={goToBoardPage}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                {[].map( item => {
                    <Column
                        key={item.id}
                        cards={item.cards}
                        title={item.title}
                        id={item.id}
                    />
                })}
            </CardContent>
            <CardActions>
                <Button onClick={deleteBoard} size="small">Удалить</Button>
                <Button onClick={() => setIsVisible(true) } size="small">Добавить колонку</Button>
            </CardActions>
            <Modal isVisible={isVisible} saveData={addColumn} handleClose={()=> setIsVisible(false)}/>
        </Card>
    );

};

Board.propTypes = {
    title: PropTypes.string
};

Board.defaultProps = {
    title: ''
};
export default memo(Board);