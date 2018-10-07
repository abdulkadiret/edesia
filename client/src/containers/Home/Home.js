import React, { Component, Fragment } from "react";
import { getDeliveries } from "../../helpers/api";
import DeliveryCard from "../../components/DeliveryCard/deliveryCard";
import "./home.css";
import Track from "../../components/Track";

class Home extends Component {
  constructor() {
    super();
    this.state = { deliveriesList: null };
  }
  componentDidMount() {
    getDeliveries().then(data =>
      this.setState({
        deliveriesList: data.data
      })
    );
  }

  render() {
    const { deliveriesList } = this.state;
    return (
      <div className="App">
        <p className="App-intro" />
        <Track info-number="number" />
        <br />
        <div className="App">
          <h2> CURRENT AVAILABLE DELIVERIES</h2>
          <div className="container">
            <div className="row delivery-row">
              {deliveriesList &&
                deliveriesList.map(delivery => {
                  return (
                    <Fragment>
                      <DeliveryCard
                        storeName={delivery.store_name}
                        deliveryId={delivery.delivery_id}
                        address={delivery.address}
                      />
                    </Fragment>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
