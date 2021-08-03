import './App.css';
import React,{useState} from 'react';
import {Router} from '@reach/router';
import Head from './components/Head';
import PlayerList from './components/PlayerList';
import CreatePlayer from './components/CreatePlayer';
import GameStatus from './components/GameStatus';
function App() {
  const [player, setPlayer] = useState([]);
  return (
    <div className="App"> 
      <Head/>
      <hr/>
      <Router>
        <PlayerList path="players/list" player={player} setPlayer={setPlayer}/>
        <CreatePlayer path="players/addplayer" player={player} setPlayer={setPlayer} />
        <GameStatus path="/status/game/:gameId" player={player} setPlayer={setPlayer}/>
      </Router>
    </div>
  );
}

export default App;
