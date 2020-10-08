import React, { useState, memo } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

const Modal = ({ isVisible, saveData, handleClose }) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false);
    const sendData = () => {
        let valueError = false;

        if(!value || !value.trim()) {
            valueError = true;
        }

        setError(valueError);

        if(!valueError){
            saveData(value)
            setValue('')
        }
    }

    return (
        <Dialog open={isVisible} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Добавить</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    error={error}
                    id="name"
                    value={value}
                    onChange={(e) => setValue(e.target.value) }
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={sendData} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}

Modal.propTypes = {
    isVisible: PropTypes.bool,
    id: PropTypes.number.isRequired,
    boardId: PropTypes.number.isRequired,
    saveData: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    isVisible: false,
};
export default memo(Modal);