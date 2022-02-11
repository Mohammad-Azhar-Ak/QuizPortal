import React, { Component } from 'react'
import { SignInComponent } from '../components';

class SignInContainer extends Component {

    constructor() {
        super()
        this.state = {
            data:{}
        }

    }

    handleChange=(value,key)=>{
        this.setState({
            data : {...this.state.data, [key] : value }
        });
    }

    handleClick=()=>{

        console.log(this.state.data)
    
    }

    render() {
        console.log(this.state.data)
        return (
            <SignInComponent data={this.state.data} handleChange={this.handleChange} handleClick={this.handleClick}/>
        )

    }
}

export default SignInContainer