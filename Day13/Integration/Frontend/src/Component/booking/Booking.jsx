
// import { Component } from 'react';
// import './booking.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// class Booking extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: props.boat.id,
//       boatName: props.boat.boatName,
//       checkInDate: '',
//       checkOutDate: '',
//       phone: '',
//       address: '',
//       email: '',
//       gender: '',
//       price: props.boat.price,
//       successMessage: '',
//     };
//   }

//   handlePurchaseIdChange = (event) => {
//     this.setState({ id: event.target.value });
//   };

//   handleBoatNameChange = (event) => {
//     this.setState({ boatName: event.target.value });
//   };

//   handleCheckInDateChange = (event) => {
//     this.setState({ checkInDate: event.target.value });
//   };

//   handleCheckOutDateChange = (event) => {
//     this.setState({ checkOutDate: event.target.value });
//   };

//   handlePhoneChange = (event) => {
//     this.setState({ phone: event.target.value });
//   };

//   handleAddressChange = (event) => {
//     this.setState({ address: event.target.value });
//   };

//   handleEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   handleGenderChange = (event) => {
//     this.setState({ gender: event.target.value });
//   };

//   handlePriceChange = (event) => {
//     this.setState({ price: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       id: this.state.id,
//       boatName: this.state.boatName,
//       checkInDate: this.state.checkInDate,
//       checkOutDate: this.state.checkOutDate,
//       phone: this.state.phone,
//       address: this.state.address,
//       email: this.state.email,
//       gender: this.state.gender,
//       price: this.state.price,
//     };

//     axios
//       .post('http://127.0.0.1:8700/adds', data)
//       .then((response) => {
//         if (response.status === 200) {
//           this.setState({ successMessage: 'Boat Added Successfully' });
//           window.location.href='/Userget'
//         }
//       })
//       .catch((error) => {
//         console.error('Error adding boat:', error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.successMessage && <p>{this.state.successMessage}</p>}

//         <form onSubmit={this.handleSubmit} className="sign-form">
//           <label className="ap-oi">Purchase ID</label>
//           <input
//             className="ap-dob"
//             type="text"
//             value={this.state.id}
//             onChange={this.handlePurchaseIdChange}
//           />

//           <label className="ap-oi">Boat Name</label>
//           <input
//             className="ap-dob"
//             type="text"
//             value={this.state.boatName}
//             onChange={this.handleBoatNameChange}
//           />

//           <label className="ap-oi">Check-In Date</label>
//           <input
//             className="ap-dob"
//             type="date"
//             value={this.state.checkInDate}
//             onChange={this.handleCheckInDateChange}
//           />

//           <label className="ap-oi">Check-Out Date</label>
//           <input
//             className="ap-dob"
//             type="date"
//             value={this.state.checkOutDate}
//             onChange={this.handleCheckOutDateChange}
//           />

//           <label className="ap-oi">Phone</label>
//           <input
//             className="ap-dob"
//             type="text"
//             value={this.state.phone}
//             onChange={this.handlePhoneChange}
//           />

//           <label className="ap-oi">Address</label>
//           <input
//             className="ap-dob"
//             type="text"
//             value={this.state.address}
//             onChange={this.handleAddressChange}
//           />

//           <label className="ap-oi">Email</label>
//           <input
//             className="ap-dob"
//             type="email"
//             value={this.state.email}
//             onChange={this.handleEmailChange}
//           />

//           <label className="ap-oi">Gender</label>
//           <select
//             className="ap-dob"
//             value={this.state.gender}
//             onChange={this.handleGenderChange}
//           >
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>

//           <label className="ap-oi">Price</label>
//           <input
//             className="ap-dob"
//             type="number"
//             value={this.state.price}
//             onChange={this.handlePriceChange}
//           />

//           <button className="login-button" type="submit">
//             ADD BOAT
//           </button>

//           <Link to="/AdminNavbar">
//             <button className="back5" type="submit">
//               BACK
//             </button>
//           </Link>
//         </form>
//       </div>
//     );
//   }
// }

// export default Booking;
import { Component } from 'react';
import './booking.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Footer from './Footer';
import { Button } from '@mui/material';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.boat.id,
      boatName: props.boat.boatName,
      checkInDate: '',
      checkOutDate: '',
      phone: '',
      address: '',
      email: '',
      gender: '',
      price: props.boat.price,
      successMessage: '',
    };
  }

  handlePurchaseIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleBoatNameChange = (event) => {
    this.setState({ boatName: event.target.value });
  };

  handleCheckInDateChange = (event) => {
    this.setState({ checkInDate: event.target.value });
  };

  handleCheckOutDateChange = (event) => {
    this.setState({ checkOutDate: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      boatName: this.state.boatName,
      checkInDate: this.state.checkInDate,
      checkOutDate: this.state.checkOutDate,
      phone: this.state.phone,
      address: this.state.address,
      email: this.state.email,
      gender: this.state.gender,
      price: this.state.price,
    };

    axios
      .post('http://127.0.0.1:8700/adds', data)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ successMessage: 'Boat Added Successfully' });
          window.location.href='/UserGet'
        }
      })
      .catch((error) => {
        console.error('Error adding boat:', error);
      });
  };

  render() {
    return (
        <div className='App'> 
        {this.state.successMessage && <p>{this.state.successMessage}</p>}

<div className='no'>
   {/* <Nav/> */}
  {/* <div> 

  </div> */}
<div className="ap-bg">

  <div className="ap-fc">
    <form className="ap-f" action="#" method="POST" onSubmit={this.handleSubmit}>
      <fieldset>
        <div className='ap-fn'>

          <input
            className='ap-fn'
            type="text"
            value={this.state.boatName}
            onChange={this.handleBoatNameChange}
            />
            </div>
      <div className='ap-oi'>
          <input
            className='ap-em'
            type="text"
            value={this.state.id}
            onChange={this.handlePurchaseIdChange}
          />


          <label className="sign-label">Check-In Date</label>
          <input
            className='ap-dob'
            type="date"
            value={this.state.checkInDate}
            placeholder='Check In Date'
            onChange={this.handleCheckInDateChange}
          />

          <label className="sign-label">Check-Out Date</label>
          <input
            className='ap-dob'
            type="date"
            value={this.state.checkOutDate}
            onChange={this.handleCheckOutDateChange}
          />

          <input
            className='ap-em'
            type="text"
            value={this.state.phone}
            placeholder='Phone'
            onChange={this.handlePhoneChange}
          />
          <input
            className='ap-em'
            type="text"
            value={this.state.address}
            placeholder='address'
            onChange={this.handleAddressChange}
          />

          <input
            className='ap-em'
            type="email"
            value={this.state.email}
            placeholder='email'
            onChange={this.handleEmailChange}
          />
          <select
            className='ap-em'
            value={this.state.gender}
            onChange={this.handleGenderChange}
          >
            <option value="other">Male</option>
            <option value="female">Female</option>
            <option value="male">Other</option>
          </select>
          <input
            className='ap-em'
            type="number"
            value={this.state.price}
            placeholder='price'
            onChange={this.handlePriceChange}
          />
          <Button class="btn btn-danger" type="submit">
            ADD DETAILS
          </Button>
          <br/><br/>
          <Link to="/Home">
            <Button class="btn btn-primary" type="submit">
              Go back
            </Button>
          </Link>
          </div>
          </fieldset>
          </form>
        </div>
      </div>
        {/* <Footer/> */}
       </div> 
      </div>
    );
  }
}

export default Post;