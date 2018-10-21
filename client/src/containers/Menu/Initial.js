import React, { Component } from "react";
import { getUserProfile } from "../../helpers/api";
import "./Initial.css";

class GetInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user.user_id;
    this.setState({ user_id: user_id });

    getUserProfile().then(response => {
      this.setState({
        name: response.data.name,
        email: response.data.email
      });
    });
  }

  render() {
    return (
      <div>
        <a className="initial navbar navbar-default">
          {this.state.name.charAt(0).toUpperCase()}
        </a>
      </div>
    );
  }
}

export default GetInitial;
