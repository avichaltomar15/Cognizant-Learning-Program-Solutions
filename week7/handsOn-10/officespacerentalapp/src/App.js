import React from 'react';
import './App.css';

function App() {
  const offices = [
    {
      name: 'Tech Park One',
      rent: 75000,
      address: 'Baner, Pune'
    },
    {
      name: 'Cyber Hub',
      rent: 58000,
      address: 'Gurgaon, Haryana'
    },
    {
      name: 'Mindspace',
      rent: 65000,
      address: 'Malad, Mumbai'
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Listings</h1>
      {offices.map((office, index) => (
        <div key={index} className="office-box">
          <h2>{office.name}</h2>
          <p>
            Rent:{' '}
            <span style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
              ₹{office.rent}
            </span>
          </p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
