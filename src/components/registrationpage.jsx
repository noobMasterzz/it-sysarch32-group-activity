import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., make an API call to register the user
    console.log('Registering with:', username, password);
    // Redirect to login page upon successful registration
    history.push('/');
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Login here</Link>.</p>
    </div>
  );
}

export default RegistrationPage;
