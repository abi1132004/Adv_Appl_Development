// import React,{useState} from 'react';
import {SiConsul} from 'react-icons/si';
// import {BsPhoneVibrate} from 'react-icons/bs';
// import {CgMenuGridO} from 'react-icons/cg';
import { Link } from 'react-router-dom';
import {AiOutlineGlobal} from 'react-icons/ai';
import './Component/Navbar/Navbar.css'
// import img1 from '../../assets/img1.jpg'
const AdminNavbar = () => {
  return (
    <>
    <div className='navBar'>
        <div className='navBarOne'>
            <div>
                <SiConsul className='icon'/>
            </div>
            <div className='atb'>
            <span><AiOutlineGlobal className='icon'/><Link to="/Post">Add boats</Link></span>
              <span><AiOutlineGlobal className='icon'/><Link to="/Management">Get Boats</Link></span>
              <span><AiOutlineGlobal className='icon'/><Link to="/UserGet">Get Users</Link></span>
              {/* <span><BsPhoneVibrate className='icon'/><Link to="/Aboutus">AboutUs</Link></span>
              <span><BsPhoneVibrate className='icon'/><Link to="/Home">Places</Link></span> */}
                <span><Link to="/LoginPage">Sign In</Link></span>
                <span><Link to="/RegisterPage">Sign Out</Link></span>
            </div>
        </div>
        <div className='navBarTwo'>
            <div>
            <h1 className='hnav3'>Admin Control</h1>
            </div>
            <form className="boatnavh1">
        <label>
          <h2>Boating on this man-made lake is an elegant way to enjoy the serene view and rich biodiversity; taking a slow pedal boat ride or a rowboat will make the aesthetic experience extra addictive.  </h2>
        </label>
        <br/>
      </form>
        </div>
    </div>
    </>
  )
}
export default AdminNavbar
