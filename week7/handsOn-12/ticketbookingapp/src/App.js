import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <h2>Welcome, User! You can book tickets now.</h2>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          <h2>Welcome, Guest! Please log in to book tickets.</h2>
          <p>Flight Details: Air India - Delhi to Mumbai</p>
        </>
      )}
    </div>
  );
}

export default App;