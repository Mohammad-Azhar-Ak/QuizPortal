import { TextField } from "@mui/material";

const CustomTextField=({label,type,handleChange,value,error,helperText})=>{
    return(
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={label}
              type={type}
              id="password"
              value = {value}
              error ={error}
              helperText ={helperText}
              autoComplete="current-password"
              onChange = {(e)=>handleChange(e.target.value)}
            />
    )
}
export default CustomTextField