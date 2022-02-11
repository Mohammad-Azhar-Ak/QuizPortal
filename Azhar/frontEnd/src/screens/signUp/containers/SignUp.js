import React, { Component } from 'react'
import { SignUpComponent } from '../components';

class SignUpContainer extends Component {

    constructor() {
        super()
        this.state = {
            data :{}
        }
    }
    handleChange=(value ,key)=>{
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
            <SignUpComponent data={this.state.data} handleChange={this.handleChange} handleClick={this.handleClick}/>
        )

    }
}

export default SignUpContainer