import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can implement your authentication logic
    // For simplicity, I'm just checking if username and password are not empty
    if (username !== '' && password !== '') {
      setLoggedIn(true);
      // You may want to redirect the user to another page upon successful login
      // For simplicity, I'm just logging in the console
      console.log('Login successful');
    } else {
      // Handle invalid credentials here
      console.log('Invalid username or password');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          {/* Display logout button or redirect to another page */}
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
