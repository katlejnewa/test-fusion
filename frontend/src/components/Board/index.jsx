import React, {memo, useState} from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import actions from '../../store/actions/boardsActions';

const { deleteBoardRequest } = actions;


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
});

const Board = ({ name, id }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const goToBoardPage = () => {
        history.push(`/board/${id}`);
    }

    const deleteBoard = (e) => {
        e.stopPropagation();
        dispatch(deleteBoardRequest(id))
    };

    return (
        <Card className={classes.root} onClick={goToBoardPage}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={(e) => deleteBoard(e)}>Удалить</Button>
            </CardActions>
        </Card>
    );

};

Board.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number.isRequired
};

Board.defaultProps = {
    title: ''
};
export default memo(Board);