import React, { Component } from 'react'
import { HomeComponent } from '../components';
import base_url from "../../../utils/api";
import axios from 'axios';
import history from '../../../utils/history';
class HomeContainer extends Component {

  state = {
    posts: []
  }

  componentDidMount = () => {
    const token = localStorage.getItem("sessionToken");
    const options = {
      headers: { "Authorization": `${token}` }
    };
    axios.get(`${base_url}/quiz`, options)
      .then(res => {
        const posts = res.data.data;
        this.setState({ posts });
        console.log("success");
      },
        (error) => {
          console.log(error);
          console.log("error")
        }

      )
  }

  handleClick = (id) => {
    console.log("clicked");
    console.log("handleClick ke andar")
    console.log(id)
    localStorage.setItem("quizId", id);
    history.push("/quizpage");

  }

  render() {

    return (
      <HomeComponent
        data={this.state.posts}
        handleClick={this.handleClick}
      />
    )

  }
}

export default HomeContainer