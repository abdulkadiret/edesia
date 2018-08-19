import React, { Component } from "react";
import "./UpdateProfile.css";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "Glasgow",
      postcode: "",
      status: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSubmit = event => {
    event.preventDefault();
    let content = {
      name: this.state.name,
      city: this.state.city,
      postcode: this.state.postcode
    };
    axios
      .put("http://localhost:4000/api/users/user_id", content)
      .then(data => data.json())
      .then(response =>
        this.setState({
          status: response.status
        })
      );
  };

  render() {
    return (
      <div>
        <div className="col">
          <h2>Update Profile</h2>
          <form className="form" name="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="name"> Name:</label>
              <input type="name" name="name" onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <label>
                City:
                <select
                  name="city"
                  type="city"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option className="form-option" value="Glasgow">
                    Glasgow
                  </option>
                  <option className="form-option" value="Edinburgh">
                    Edinburgh
                  </option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <label for="address">Postcode:</label>
              <input
                type="postcode"
                name="postcode"
                onChange={this.handleChange}
              />
            </div>
          </form>
          <div className="form-group">
            <button className="btn submit">submit </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
