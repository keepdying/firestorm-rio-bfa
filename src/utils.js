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


export { idToDungeon, returnPlayerRuns, secondsToHMS };