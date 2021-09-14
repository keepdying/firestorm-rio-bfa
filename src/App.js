import './App.css';
import players_json from './players.json'
import currentRuns from './runs.json'
import {useState} from 'react'
import {PlayerAccordion} from './utils';

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <div className="app-header">Firestorm RIO (WIP!)</div>
      <p>Made by keepdying#5821. Last updated on 15/09/2021 at 00:25 GMT+2.</p>
      <p>Note1: There could be some missing runs due to mistakes in algorithm!!!</p>
      <p>Note2: Current gathered data will be reset when parsing is fully automated!!!</p>

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

      } ).map((player, index) => {
        return (<PlayerAccordion player={player} currentRuns={currentRuns}/>)}
    )}
    </div>
  );}



export default App;
