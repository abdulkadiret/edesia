import React, { Component } from "react";
import { getDeliveriesAdmin } from "../../helpers/api";
import "./Table.css";
class DeliveriesAdmin extends Component {
  constructor() {
    super();
    this.state = {
      deliveries: []
    };
  }
  componentDidMount = async () => {
    const data = await getDeliveriesAdmin;
    console.log(data);
    this.setState({
      deliveries: data
    });
  };
  render() {
    return (
      <div className="App">
        <h2> All Deliveries</h2>
        <table className="results">
          <thead>
            <tr>
              <th>Delivery Id </th>
              <th>address </th>
              <th> Deadline </th>
              <th>driver_id </th>
            </tr>
          </thead>
          {this.state.deliveries.map(delivery => (
            <tbody>
              <tr>
                <td>{delivery.delivery_id} </td>

                <td>{delivery.address} </td>

                <td>{delivery.deadline} </td>

                <td>{delivery.driver_id} </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default DeliveriesAdmin;
