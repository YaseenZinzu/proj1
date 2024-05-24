import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [id, setId] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8000/api/users/${id}/`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div className="App">
      <h1>Fetch User Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter user ID"
        />
        <button type="submit">Fetch</button>
      </form>
      {userData && (
        <div>
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;

