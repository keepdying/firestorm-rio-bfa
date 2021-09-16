import { Container } from '@material-ui/core';

import PlayerListScreen from './screens/playerListScreen';

import lastupdated from './lastUpdated.json'
import players_json from './players.json'
import currentRuns from './runs.json';

import "./App.css";
function App() {

  return (
    <div className="App">
        <header>
          <Container className="headerContent" maxWidth="lg" component="div">
            <h1>Firestorm RIO (Beta!)</h1>
            <p>Made by keepdying#5821. Last updated on {lastupdated}</p>
            <p>Total Players: {players_json.length}, Total Runs: {currentRuns.length}</p>
            <p> F.A.Q: <a href="https://github.com/keepdying/firestorm-rio">https://github.com/keepdying/firestorm-rio</a></p>
          </Container>
        </header>
      <PlayerListScreen />
    </div>
  );}



export default App;
