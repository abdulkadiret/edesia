import React, { Component } from "react";
import { getDeliveries } from "../../helpers/api";
import "../DeliveriesAdmin/Table.css";
class MyDeliveries extends Component {
  state = {
    deliveries: []
  };
  componentDidMount = async () => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const driver_id = JSON.parse(user).user_id;
        const data = await getDeliveries();
        const filiteredData = data.data.filter(delivery => {
          return delivery.driver_id === driver_id;
        });
        this.setState({
          deliveries: filiteredData
        });
      } catch (e) {
        this.setState({
          deliveries: []
        });
      }
    }
  };
  render() {
    return (
      <div>
        <h2> My Deliveries</h2>
        <table className="results">
          <thead>
            <tr>
              <th>Delivery Id </th>
              <th>address </th>
              <th> Deadline </th>
              <th> Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.deliveries.map(delivery => (
              <tr className="delivery-row">
                <td>{delivery.delivery_id} </td>
                <td>{delivery.address} </td>
                <td>{delivery.deadline} </td>
                <td>{delivery.status} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default MyDeliveries;
