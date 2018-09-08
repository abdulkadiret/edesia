import React, { Component } from "react";
import "./UpdateProfile.css";
import { updateUserProfile, getUserProfile } from "../../helpers/api";

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      name: "",
      city: "Glasgow",
      postcode: "",
      password: "",
      successUpdate: null
    };
  }

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user.user_id;
    this.setState({ user_id: user_id });

    getUserProfile().then(response => {
      this.setState({
        user_id: response.data.user_id,
        name: response.data.name,
        city: response.data.city,
        postcode: response.data.postcode,
        password: response.data.password
      });
    });
  }

  handleSave = event => {
    event.preventDefault();
    let content = {
      name: this.state.name,
      city: this.state.city,
      postcode: this.state.postcode,
      password: this.state.password
    };
    updateUserProfile(this.state.user_id, content)
      .then(response => this.setState({ successUpdate: true }))
      .catch(err => {
        this.setState({ successUpdate: false });
      });
  };

  renderResult = () => {
    if (this.state.successUpdate === null) return null;

    if (this.state.successUpdate) {
      return (
        <div class="alert alert-success" role="alert">
          Your information has been updated successfully
        </div>
      );
    } else {
      return (
        <div class="alert alert-primary" role="alert">
          An error occurred while updating your profile. Please try again
        </div>
      );
    }
  };

  render() {
    console.log("this is statusUdata", this.state.successUpdate);
    return (
      <div>
        <div className="col">
          <h2>Edit Profile</h2>
          <form className="form" name="form" onSubmit={this.handleSave}>
            <div className="form-group">
              <label> Name:</label>
              <input
                type="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                City:
                <select
                  name="city"
                  type="city"
                  value={this.state.city}
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
              <label>Postcode:</label>
              <input
                type="postcode"
                name="postcode"
                value={this.state.postcode}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label> Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <button className="btn submit">Update Profile </button>
            </div>
          </form>
          {this.renderResult()}
        </div>
      </div>
    );
  }
}

export default UpdateProfile;
