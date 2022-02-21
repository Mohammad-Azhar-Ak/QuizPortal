import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import { CustomRadioButton } from '../../';
import {choice} from "../../constants";

const QuestionCard=({index, data, onChangeValue, answers})=> {
    return (
        <Card sx={{ maxWidth: 600 , backgroundColor:"#e6ee9c" , margin:"2px"}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ justifyContent: "center"}}>
                       Question-{index+1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {data.statement}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions  style={{ justifyContent: "center"}}>
                <CustomRadioButton
                    options={choice}
                    value={answers[data.id]}
                    handleChange={(value) => onChangeValue(data.id, value)} />
            </CardActions>
        </Card>
    );
}
export default QuestionCard