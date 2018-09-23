import React, { Component } from "react";
import { getMyDeliveries } from "../../helpers/api";
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
        const { data } = await getMyDeliveries(driver_id);
        console.log(data);
        this.setState({
          deliveries: data
        });
      } catch (e) {
        this.setState({
          deliveries: []
        });
        console.error(e);
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
