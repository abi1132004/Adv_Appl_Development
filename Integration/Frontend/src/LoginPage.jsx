import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate} from 'react-router-dom';
import "./LoginPage.css";

const LoginPage = () => {
  // const [activeForm, setActiveForm] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: loginEmail,
        password: loginPassword
      });

      console.log(response.data); // Handle the response data appropriately
      const token = response.data.token; // Extract the token from the response
      console.log('Token:', token); // Log the token to the console
      localStorage.setItem('token', token);

      // Keep existing redirection logic
      if (loginEmail === 'admin@gmail.com' && loginPassword === 'Admin@123') {
        navigate('/AdminNavbar');
      } else if (response.data.role === 'ADMIN') { 
        navigate('/Post');
      } else {
        navigate('/Main');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div id='div32'>
      <h2 className='h2log'>Login Page</h2>
      <br/><br />
      <form className='formlog' onSubmit={handleLogin}>
        <label className='labellog'>
          Email:<br/><br/>
          <input type="email" className='inputlog' value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
 />
        </label>
        <br/>
        <label>
          Password:<br/><br/>
          <input type="password" className='inputlog'  value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
/>
        </label>
        <br />
        <button className="buttlog" >Login</button>
            <br />
            <h3 className='plog'>New user? <Link to="/RegisterPage">Create an account</Link></h3>
      </form>
    </div>
  );
};

export default LoginPage;