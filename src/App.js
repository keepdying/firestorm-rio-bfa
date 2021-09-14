import './App.css';
import players_json from './players.json'
import currentRuns from './runs.json'
import {useState} from 'react'
import {PlayerAccordion} from './utils';

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <div className="app-header">Firestorm RIO (Beta!)</div>
      <p>Made by keepdying#5821. Last updated on 14/09/2021 at 22:00 GMT+2.</p>

      <input
       type="text" 
       placeholder="Search by name..." 
       onChange={(event) => {setSearchTerm(event.target.value);}}
      />

      {players_json.filter((player) => {
        if (searchTerm == '') {
          return player
        } else if (player.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return player
        }

      } ).map((player, index) => {
        return (<PlayerAccordion player={player} currentRuns={currentRuns}/>)}
    )}
    </div>
  );}



export default App;
