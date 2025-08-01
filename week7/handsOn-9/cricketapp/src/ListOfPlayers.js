import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 88 },
    { name: 'Dhoni', score: 102 },
    { name: 'Pant', score: 65 },
    { name: 'Shreyas', score: 72 },
    { name: 'Bumrah', score: 28 },
    { name: 'Ashwin', score: 76 },
    { name: 'Gill', score: 91 },
    { name: 'Karthik', score: 69 },
    { name: 'Rahul', score: 85 },
    { name: 'Jadeja', score: 81 }
  ];

  const filtered = players.filter(p => p.score >= 70);

  return (
    <div>
      <h2>Top Performers</h2>
      <ul>
        {filtered.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
