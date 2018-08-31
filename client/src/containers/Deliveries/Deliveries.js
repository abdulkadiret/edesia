import React, { Component } from "react";
import DeliveriesAdmin from "../../containers/DeliveriesAdmin/DeliveriesAdmin";

class Deliveries extends Component {
  render() {
    return (
      <div className="App">
        <h2>Deliveries </h2>
        <DeliveriesAdmin />
      </div>
    );
  }
}

export default Deliveries;
