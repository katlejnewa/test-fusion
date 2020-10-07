import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
});

const Card = ({ title, id }) => {
    const classes = useStyles();
    const deleteCard = () => {
        /*
        *
        *
        * dispatch(deleteCard(id));
        * */
    }


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={deleteCard} size="small">Удалить</Button>
            </CardActions>
        </Card>
    );

};

Card.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
};

Card.defaultProps = {
    title: ''
};
export default memo(Card);