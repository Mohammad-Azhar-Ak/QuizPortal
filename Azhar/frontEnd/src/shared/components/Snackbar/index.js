import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

const CustomPositionedSnackbar=({anchorOrigin, open, onClose, message})=> {
 
  return (
    <div>
      <Snackbar
        sx={{background:"#c0ca33"}}
        anchorOrigin={anchorOrigin}
        open={open}
        onClose={onClose}
        message={message}
      />
    </div>
  );
}

export default CustomPositionedSnackbar
