import React, { Component } from 'react'
import { ProfileComponent } from '../components';
import axios from "axios";
import base_url from "../../../utils/api";
import history from '../../../utils/history';

class ProfileContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            responseData: {},
            data: {}
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('sessionToken');
        const options = {
            headers: { "Authorization": `${token}` }
        };
        console.log(localStorage.getItem("sessionToken"));
        axios.get(`${base_url}/user/profile`, options)
            .then(res => {
                const data = res.data.data;
                // console.log(posts);
                this.setState({ responseData: data });
                console.log("profile success");
                console.log(this.state.responseData);
            },
                (error) => {
                    console.log(error);
                    console.log("error in get api")
                }
            )
    }

    handleChange = (key, value) => {
        this.setState({
            responseData: { ...this.state.responseData, [key]: value },
        });
        console.log("in handle change")
        console.log(this.state.responseData)
    };

    handleClick = () => {
        const token = localStorage.getItem('sessionToken');
        const options = {
            headers: { "Authorization": `${token}` }
        };
        console.log("data received");
        console.log(this.state.responseData);
        axios.post(`${base_url}/user/update`, this.state.responseData, options)
            .then((response) => {
                console.log("success");
                history.push("/home");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <ProfileComponent
                data={this.state.responseData}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
            />
        )
    }
}

export default ProfileContainer