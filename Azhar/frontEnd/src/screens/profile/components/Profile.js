import React from "react";
import { Grid, Paper, Avatar } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import {
    CustomInput,
    CustomButton,
    CustomRadioButton,
} from "../../../shared";
import { gender } from "../../../shared/constants";
import { FormControl } from "@mui/material";
import { CustomBackground } from "../../../assets/images";

const ProfileComponent = ({ data, handleChange, handleClick }) => {
    console.log("component");

    const paperStyle = {
        padding: "10px 60px",
        width: 400,
        margin: "25px auto",
        height: "75vh",
        backgroundColor: "#c0ca33",
    };
    const headerStyle = {
        margin: 0
    };

    return (
        <Grid
            container
            height="50vh"
            sx={{
                backgroundColor: "primary",
                backgroundImage: `url(${CustomBackground})`,
                height: "90vh",
                width: "212vh"
            }}>
            <Paper elevation={20} style={paperStyle} >
                <Grid align="center">
                    <Avatar>
                        <PersonIcon fontSize="large" sx={{color:"#827717"}}/>
                    </Avatar>
                    <h2 style={headerStyle}>Profile</h2>
                </Grid>
                <Grid align="center" >
                    <FormControl>
                        <CustomInput
                            type="text"
                            placeholder=""
                            label="Name"
                            value={data.name}
                            handleChange={(value) => handleChange("name", value)}
                        />
                        <CustomInput
                            type="number"
                            placeholder=""
                            label="Mobile"
                            value={data.mobile}
                            handleChange={(value) => handleChange("mobile", value)}
                        />
                        <CustomRadioButton
                            options={gender}
                            labelValue="Gender"
                            value={data.gender}
                            handleChange={(value) => handleChange("gender", value)}
                        />
                        <CustomInput
                            type="text"
                            placeholder=""
                            label="LinkedIn"
                            value={data.linkedIn}
                            handleChange={(value) => handleChange("linkedIn", value)}
                        />
                        <CustomInput
                            type="text"
                            placeholder=""
                            label="Hobbies"
                            value={data.hobbies}
                            handleChange={(value) => handleChange("hobbies", value)}
                        />
                        <CustomButton label="Update" type="Submit" handleClick={handleClick} />
                    </FormControl>

                </Grid>
            </Paper>
        </Grid>
    );
};


export default ProfileComponent