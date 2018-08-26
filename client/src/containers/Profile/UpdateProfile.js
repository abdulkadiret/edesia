import React, { Component } from "react";
import "./UpdateProfile.css";
import axios from "axios";
// import { getUserProfile} from "../../helpers/api"

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "Glasgow",
      postcode: "",
      status: null
    };
  }

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSave = event => {
    event.preventDefault();
    let content = {
      name: this.state.name,
      city: this.state.city,
      postcode: this.state.postcode
    };
      axios.put("/api/users/:user_id", content).then(response =>
      this.setState({
        status: response.status
      })
    );
    event.target.value = "";
  };

  render() {
      
    return (
      <div>
        <div className="col">
          <h2>Edit Profile</h2>
          <form className="form" name="form" onSubmit={this.handleSave}>
            <div className="form-group">
              <label> Name:</label>
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
              <label>Postcode:</label>
              <input
                type="postcode"
                name="postcode"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <button className="btn submit">Update Profile </button>
            </div>
          </form>
          {this.state.status === 200
            ? "Your information has been updated successfully"
            : null}
          {this.state.status === 502
            ? "An error occurred while updating your profile. Please try again"
            : null}
        </div>
      </div>
    );
  }
}

export default UpdateProfile;
