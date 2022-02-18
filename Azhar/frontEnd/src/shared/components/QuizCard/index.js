import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import CustomButton from '../Button';

export default function MultiActionAreaCard({ index, title, handleClick }) {
  return (
    <Card sx={{ maxWidth: 200, backgroundColor: "#f0f4c3" }}>
      <CardActionArea sx={{ justifyContent: "center" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <CustomButton handleClick={handleClick} type="Submit" label="Play Quiz" />
      </CardActions>
    </Card>
  );
}
