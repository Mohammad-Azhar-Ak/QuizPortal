import { TextField } from "@mui/material";

const NewField=({name, type,handleChange,value})=>{
    return(
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={name}
              type={type}
              id="password"
              value = {value}
              error ={false}
              helperText ="plz corrrect"
              autoComplete="current-password"
              onChange = {(e)=>handleChange(e.target.value)}
            />
    )
}
export default NewField