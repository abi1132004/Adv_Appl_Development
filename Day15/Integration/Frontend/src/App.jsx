// App.jsx
// import React from 'react';
import Home from './Component/Home/Home';
// import Travel from './Component/Travelers/Travel';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage'
// import Seats from './Component/Seats/Seats';
 import Payment from './Component/Payment/Payment';
import Booking from './Component/booking/Booking';
// import Search from './Component/Search/Search';
// import Navbar from './Component/Navbar/Navbar';
// import Info from './Component/Info/Info';
// import Users from './Component/Users/Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from './Component/Footer/Footer';
import Adminget from './Component/Adminget/Adminget';
import Contactus from './Component/Contactus/Contactus';
import AboutUs from './Component/Aboutus/Aboutus';
import LAUPage from './Component/LAUPage/LAUPage';
import Main from './Component/Main/Main';
// import AdminSupport from './Component/AdminSupport/AdminSupport';
import Management from './Management';
// import Post from './Post';
// import MM from './MM';
// import UserBooking from './UserBooking';
import AdminNavbar from './AdminNavbar';
import Post from './Post';
import MM from './MM';
import UserGet from './UserGet';

const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LAUPage/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/RegisterPage" element={<RegisterPage/>}/>
          {/* <Route path="/LoginPage" element={<LoginPage/>}/> */}
          <Route path="/Main" element={<Main/>}/>
          <Route path="/AdminNavbar" element={<AdminNavbar/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Booking" element={<Booking/>}/>
          {/* <Route path="/AdminSupport" element={<AdminSupport/>}/> */}
          <Route path="/Management" element={<Management/>}/>
          <Route path="/MM" element={<MM/>}/>
          <Route path="/UserGet" element={<UserGet/>}/>
          <Route path="/Adminget" element={<Adminget/>}/>
          <Route path="/Contactus" element={<Contactus/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Booking" element={<Booking/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/RegisterPage" element={<RegisterPage/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/Main" element={<Main/>}/>
          <Route path="/Post" element={<Post/>}/>
          <Route path="/UserGet" element={<UserGet/>}/>

          {/* <Route path="/Display" element={<Display/>}/> */}
          {/* <Route path="/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/SearchItem" element={<SearchItem/>}/>
          <Route path="/Canceltrip" element={<Canceltrip/>}/>
          <Route path="/Updatetrip" element={<UpdateTrip/>}/> */}
        </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;
