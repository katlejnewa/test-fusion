import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import actions from '../../store/actions/cardsActions';

const { deleteCardRequest } = actions;

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
});

const CardElement = ({ name, id, boardId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const deleteCard = () => {
        dispatch(deleteCardRequest({id, boardId}));
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={deleteCard} size="small">Удалить</Button>
            </CardActions>
        </Card>
    );

};

CardElement.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
    boardId: PropTypes.number.isRequired,
};

CardElement.defaultProps = {
    name: ''
};
export default memo(CardElement);