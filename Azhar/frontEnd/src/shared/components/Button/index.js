import {Button} from '@mui/material'

const NewButton=({label,type,value,handleClick})=>{
    return(
        <Button
              type={type}
              fullWidth
              variant="contained"
              color="primary"
              className="newButton"
              value={value}
              onClick={handleClick}
            >
                {label}
            </Button>       
    )
}
export default NewButton