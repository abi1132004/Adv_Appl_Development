// RegisterPage.jsx
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';

const RegisterPage = () => {

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    number: false,
    lowercase: false,
    specialSymbol: false,
    uppercase: false,
  });
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: signupName,
        email: signupEmail,
        password: signupPassword,
        confirmPassword: confirmPassword // Add confirmPassword field
      });

      console.log(response.data); // Handle the response data appropriately
      navigate('/LoginPage');
      window.location.reload(); // Reload the page after successful sign-up
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again later.');
    }
  };

  const updatePasswordRequirements = (password) => {
    const requirements = {
      length: password.length >= 8 && password.length <= 16,
      number: /[0-9]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialSymbol: /[@$!%*?&]/.test(password),
      uppercase: /[A-Z]/.test(password),
    };
    setPasswordRequirements(requirements);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setSignupPassword(newPassword);
    updatePasswordRequirements(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (signupPassword === confirmPasswordValue) {
      setPasswordMatchError(false);
    } else {
      setPasswordMatchError(true);
    }
  };



  return (
    <div id='div3'>
      <h2>Register Page</h2>
    

      <form className="formlog1" onSubmit={handleSignup}>
        <label>
          Username:<br/><br/>
          <input type="text" name="username" value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
 />
        </label>
        <br />
        <label>
          Email:<br/><br/>
          <input type="email" name="email"  value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}/>
        </label>
        <br />
        <label>
          Password:<br/><br/>
          <input type="password" name="password"  value={signupPassword}
                    onChange={handlePasswordChange}
 />
        </label>
        <br />
        <label>
          Confirm password:<br/><br/>
          <input type="password" name="password"  value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
 />
        </label>
        <br/><br/>
        <button type="submit">Register</button>

      </form>
          <h3>Already have an account? <Link to="/LoginPage">Login</Link></h3>
    </div>
  );
};

export default RegisterPage;


// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [confirmPassword, setConfirmPassword] = useState('');
// const [error, setError] = useState('');
//  const navigate=useNavigate();
// const handleRegister = async () => {
//   try {
//     if (!validateEmail(email)) {
//       setError('Please enter a valid email.');
//       return;
//     }

//     if (password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     // Make a POST request to the backend
//     const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
//       name,
//       email,
//       password,
//       confirmPassword
//     });
//     navigate('/LoginPage');
//     console.log('Registration successful!', response.data);
//     setError('');
    
//   } catch (error) {
//     console.error('Registration failed', error);
//     setError('Registration failed. Please try again.');
//   }
// };

// const validateEmail = (email) => {
//   const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//   return emailRegex.test(email);
// };