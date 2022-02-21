import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AnswerDialog = ({ open, handleClose, submitResponse }) => {

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        sx={{backgroundColor:"#eeff41"}}
      >
        <DialogTitle>{"Your Final Score"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p>Right Answers :{submitResponse.rightCount} / Wrong Answers :{submitResponse.wrongCount} </p>
            <p></p>
            <p>Total Scores  :{submitResponse.totalScore} / Total Marks   :{submitResponse.totalMarks}  </p>
            <p></p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AnswerDialog
