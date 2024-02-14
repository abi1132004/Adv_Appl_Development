import axios from "axios";
import React, { Component } from "react";
import './UserGet.css';

class UserGet extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8700/getBooking')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>Purchase ID</th>
            <th>Boat Name</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.purchaseId}>
              <td>{item.purchaseId}</td>
              <td>{item.boatName}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserGet;