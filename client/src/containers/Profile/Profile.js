import React, { Component } from "react";
import UpdateProfile from "./UpdateProfile";
import MyDeliveries from "./MyDeliveries";

class Profile extends Component {
  render() {
    return (
      <div>
        <UpdateProfile />
        <br />
        <MyDeliveries />
      </div>
    );
  }
}

export default Profile;
