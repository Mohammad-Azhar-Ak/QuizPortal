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
        backgroundColor: "#d4e157",
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
                height: "92vh",
                width: "212vh"
            }}>
            <Paper elevation={20} style={paperStyle} >
                <Grid align="center">
                    <Avatar>
                        <PersonIcon fontSize="large" sx={{color:"#009688"}}/>
                    </Avatar>
                    <h2 style={headerStyle}>Profile</h2>
                </Grid>
                <Grid align="center" >
                    <FormControl>
                        <CustomInput
                            type="text"
                            placeholder="Enter your name"
                            label="Name"
                            value={data.name}
                            handleChange={(value) => handleChange("name", value)}
                        />
                        <CustomInput
                            type="number"
                            placeholder="Enter your mobile number"
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
                            placeholder="Enter your profile link"
                            label="LinkedIn"
                            value={data.linkedIn}
                            handleChange={(value) => handleChange("linkedIn", value)}
                        />
                        <CustomInput
                            type="text"
                            placeholder="Write your hobbies"
                            label="Hobbies"
                            value={data.hobbies}
                            handleChange={(value) => handleChange("hobbies", value)}
                        />
                        <CustomButton label="Update" type="submit" handleClick={handleClick} />
                    </FormControl>

                </Grid>
            </Paper>
        </Grid>
    );
};


export default ProfileComponent