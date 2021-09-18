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

function playerList(styles, playerRun){
  if (playerRun["pclasses"]) {
    return <div className={styles.accordionAltContent}> <div className={`${styles[`color_${playerRun["pclasses"][0]}`]}`}>{playerRun["pnames"][0]}</div>, <div className={`${styles[`color_${playerRun["pclasses"][1]}`]}`}>{playerRun["pnames"][1]}</div>, <div className={`${styles[`color_${playerRun["pclasses"][2]}`]}`}>{playerRun["pnames"][2]}</div>, <div className={`${styles[`color_${playerRun["pclasses"][3]}`]}`}>{playerRun["pnames"][3]}</div>,<div className={`${styles[`color_${playerRun["pclasses"][4]}`]}`}>{playerRun["pnames"][4]}</div></div>
  } else {
    return <div className={styles.accordionAltContent}> <div className={styles.color_noclass}>{playerRun["pnames"][0]}</div>, <div className={styles.color_noclass}>{playerRun["pnames"][1]}</div>, <div className={styles.color_noclass}>{playerRun["pnames"][2]}</div>, <div className={styles.color_noclass}>{playerRun["pnames"][3]}</div>, <div className={styles.color_noclass}>{playerRun["pnames"][4]}</div></div>
  }

}

export { idToDungeon, returnPlayerRuns, secondsToHMS, playerList };