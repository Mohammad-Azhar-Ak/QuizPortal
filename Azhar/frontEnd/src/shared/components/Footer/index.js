import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid
} from "@mui/material";

const NewFooter = () => {
    return(
    <>
        <Grid container justify="center" style={{minHeight: "212px"}} >
            <Grid container item sm={6} xs={11} justify="space-between">
               
            </Grid> 
        </Grid>
        <AppBar position="sticky" elevation={10} component="footer" color="primary"  >
            <Toolbar style={{ justifyContent: "center" }}>
                <Typography variant="caption"> quiz Portal Developed by Mohammad Azhar OnGrid ©2020</Typography>
            </Toolbar>
        </AppBar>
    </>
    )
}

export default NewFooter;