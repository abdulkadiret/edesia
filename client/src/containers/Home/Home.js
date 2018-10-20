import React, { Component, Fragment } from "react";
import { getDeliveries } from "../../helpers/api";
import DeliveryCard from "../../components/DeliveryCard/deliveryCard";
import "./home.css";
import Track from "../../components/Track";
import Map from "../../components/Map/Map";

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
        <h1 className="App-title">WELLCOME TO EDESIA</h1>
        <p className="App-intro" />
        <h2>FOOD PICKUP REPORT </h2>
        <Track info-number="number" />
        <br />
        <div className="App">
          <h2> CURRENT AVAILABLE DELIVERIES</h2>

          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />

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
