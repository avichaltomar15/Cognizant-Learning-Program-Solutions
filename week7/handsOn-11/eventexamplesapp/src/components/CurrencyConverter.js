import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const result = (parseFloat(rupees) / 90).toFixed(2);
    setEuro(result);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in Rupees"
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>Euro: {euro}</p>
    </div>
  );
};

export default CurrencyConverter;