import * as React from "react";
import { Grid } from "@mui/material";
import { CustomCard } from "../../../shared";
import { CustomBackground } from "../../../assets/images";

const HomeComponent = ({ data, handleClick }) => {
 
  return (
    <  Grid container sx={{
      backgroundColor: "primary",
      backgroundImage: `url(${CustomBackground})`,
      height: "90vh",
      width: "210vh",
  }}>
      <Grid container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        backgroundColor ="#f0f4c3"

      >
        <Grid item sx={12}>
          <h1>List of Quiz!</h1>
        </Grid>
      </Grid>
      <Grid container
       spacing={2}
       direction="row"
       alignItems="center"
       justifyContent="center"
       marginTop={1}
       marginBottom={1}
       maxWidth={"100%"}
       >
        {data.length > 0 ?
            data.map((item, index) =><Grid item md={1.5} >
           <CustomCard
              index={index}
              title={item.title}
              handleClick={() => handleClick(item.id)}
              buttonLabel="Play Quiz" />           
        </Grid>)
         : "No Quiz"}
      </Grid>
    </Grid>

  );
};
export default HomeComponent;
