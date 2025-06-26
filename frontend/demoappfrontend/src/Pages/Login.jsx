import React from 'react'
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://16.171.34.198:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
       if (data.success) {
    setMessage("Login successful");
} else {
    setMessage("Login failed " + (data.message || 'unknown error'));
}

      })
      .catch(err => {
        console.error(err);
        setMessage("An error occurred. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>

      {message && <h1>{message}</h1>} {/* show message if exists */}
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter password"
        required
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
