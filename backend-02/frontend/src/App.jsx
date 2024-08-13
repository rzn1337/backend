import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get('/api/players')
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Players</h1>
      <p>Players: {players.length}</p>
      {players.map((player) => (
        <div key={player.id}>{player.name}</div>
      ))}
    </>
  );
}

export default App;
