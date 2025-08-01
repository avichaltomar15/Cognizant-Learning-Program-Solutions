import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ['Virat', 'Dhoni', 'Pant', 'Ashwin', 'Gill'];
  const evenPlayers = ['Rohit', 'Rahul', 'Karthik', 'Jadeja', 'Bumrah'];

  const [first, second, ...others] = oddPlayers;
  const T20 = ['Kohli', 'Shami', 'Surya'];
  const Ranji = ['Sarfaraz', 'Jaiswal'];

  const merged = [...T20, ...Ranji];

  return (
    <div>
      <h2>Odd Team</h2>
      <p>Captain: {first}</p>
      <p>Vice Captain: {second}</p>
      <p>Others: {others.join(', ')}</p>

      <h2>Merged Players</h2>
      <ul>
        {merged.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
