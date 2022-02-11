import React from "react"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { FormLabel } from "@mui/material";
import { FormControlLabel } from "@material-ui/core";

const RadioButtonComponent = ({ handleChange, value,options,labelValue }) => {
  const marginTop = { marginTop: 5 }
  return (
    <FormControl component="fieldset" style={marginTop}>
      <FormLabel component="legend">{labelValue}</FormLabel>
      <RadioGroup
        aria-label="RadioButton"
        name="RadioButton"
        style={{ display: 'primary' }}
        value={value}
        onChange={(e) => handleChange(e.target.value)}>
         {options.map((item,index)=><FormControlLabel value={item.value} control={<Radio />} label={item.label} />)}
      </RadioGroup>
    </FormControl>

  )
}
export default RadioButtonComponent