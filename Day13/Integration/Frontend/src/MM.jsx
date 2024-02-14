import { Component } from "react";
import axios from 'axios';
import './Management.css';
// import { Link } from 'react-router-dom';
// import Post from "./Post";
// import UBook from "./UBook";
import Booking from "./Component/booking/Booking";

class MM extends Component {
  state = {
    data: [],
    selectedboat: null
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://127.0.0.1:8700/get')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleBuyClick = (id) => {
    const selectedboat = this.state.data.find(boat => boat.id === id);
    this.setState({ selectedboat });
  }

  render() {
    return (
      <div>
        <div className="card3-container">
          {this.state.data.map(item => (
            <div className="card3" key={item.id}>
              <img src={item.bImage} alt={item.boatName} />
              <h3>Boat ID: {item.id}</h3>
              <h3>Boat Name: {item.boatName}</h3>
              <p>Boat Description: {item.boatDescription}</p>
              <p>Capacity: {item.capacity}</p>
              <p>Phone: {item.phone}</p>
              <p>Number of Persons: {item.noOfPersons}</p>
              <p>Price: {item.price}</p>
              <center>
                <button onClick={() => this.handleBuyClick(item.id)}>BOOK</button>
              </center>
            </div>
          ))}
        </div>
       <div>

        { this.state.selectedboat && <Booking boat={this.state.selectedboat} />}
       </div>
      </div>
    );
  }
}

export default MM;