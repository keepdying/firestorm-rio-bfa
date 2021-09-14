import React, { useState } from 'react';
import dungeons from './dungeons.json';


function returnPlayerRuns(rids, currentRuns){
  let runs = [];

  for (let i = 0; i < rids.length; i++) {
    for (let j = 0; j < currentRuns.length; j++) {
      if (rids[i] === currentRuns[j].rid) {
        runs.push(currentRuns[j])
      }
    }
  }
  runs.sort()
  return runs
};

function idToDungeon(id){
  for (let i = 0; i < dungeons.length; i++){
    if (id === parseInt(dungeons[i]["id"].slice(dungeons[i]["id"].length - 3))){
      return dungeons[i].name
    }
  }
  return undefined
}

function secondsToHMS(seconds){
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}

const PlayerAccordion = ({ player, currentRuns }) => {
  const [isActive, setIsActive] = useState(false);
  //let playerRuns = returnPlayerRuns(player.bruns, currentRuns);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{player.name}, Score: {player.fsio}</div>
        {/* <div>{isActive ? '-' : '+'}</div> */}
      </div>
      {isActive && <div className="accordion-content"> {returnPlayerRuns(player.bruns, currentRuns).map((playerRun, index) => {
        return (<PlayerRunsAcc playerRun={playerRun}/>)}
    )} </div>}
    </div>
  );
};


const PlayerRunsAcc = ({ playerRun }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-alt-item">
      <div className="accordion-alt-title" onClick={() => setIsActive(!isActive)}>
        <div>Dungeon: {idToDungeon(playerRun["dung"])}, Lvl: {playerRun["lvl"]}, Time: {secondsToHMS(playerRun["time"])}, Score: {playerRun["score"]}</div>
        {/* <div>{isActive ? '-' : '+'}</div> */}
      </div>
      {isActive && <div className="accordion-alt-content"> {playerRun["pnames"][0]}, {playerRun["pnames"][1]}, {playerRun["pnames"][2]}, {playerRun["pnames"][3]}, {playerRun["pnames"][4]}</div>}
    </div>
  );
};

export {PlayerAccordion};