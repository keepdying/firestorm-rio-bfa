import './App.css';
import players_json from './players.json'
import currentRuns from './runs.json'
import {useState} from 'react'
import {PlayerAccordion} from './utils';
//import lastupdated from './lastUpdated.json'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <div className="app-header">Firestorm RIO (WIP!)</div>
      <p>Made by keepdying#5821. Last updated on ---</p>
      <p>Total Players: {players_json.length}, Total Runs: {currentRuns.length}</p>
      <p> F.A.Q: <a href="https://github.com/keepdying/firestorm-rio">https://github.com/keepdying/firestorm-rio</a></p>

      <input
       type="text" 
       placeholder="Search by name..." 
       onChange={(event) => {setSearchTerm(event.target.value);}}
      />

      {players_json.filter((player) => {
        if (searchTerm === '') {
          return player
        } else if (player.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return player
        }
        return undefined

      } ).map((player, index) => {
        return (<PlayerAccordion player={player} currentRuns={currentRuns}/>)}
    )}
    </div>
  );}



export default App;
