import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., make an API call to authenticate the user
    console.log('Logging in with:', username, password);
    // Redirect to home/dashboard page upon successful login
    history.push('/home');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
    </div>
  );
}

export default LoginPage;
