import React from "react";

import { idToDungeon, secondsToHMS } from "../../utils";

import * as styles from "./styles.module.scss";

const getDungeonImage = (dungeon) => {
  console.log("DUNG", dungeon)
  switch(dungeon){
    case "Atal'Dazar": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1763_244.jpg"
    case "Operation: Mechagon (Junkyard)": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_2097_369.jpg"
    case "Tol Dagor": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1771_246.jpg"
    case "Temple of Sethraliss": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1877_250.jpg"
    case "Waycrest Manor": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1862_248.jpg"
    case "Siege of Boralus": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1822_353.jpg"
    case "The Underrot": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1841_251.jpg"
    case "Freehold": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1754_245.jpg"
    case "Operation: Mechagon (Workshop)": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_2097_369.jpg"
    case "The MOTHERLODE!!": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1594_247.jpg"
    case "Shrine of the Storm": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1864_252.jpg"
    case "King's Rest": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1762_249.jpg"
    default: return null;
  }
}
const PlayerRunsAcc = ({ playerRun }) => {
    return (
      <div style={{ backgroundImage: `url(${getDungeonImage(idToDungeon(playerRun["dung"]))})`}} className={styles.accordionAltItem}>
        <div className={styles.darkBackground} />
        <div className={styles.accordionAltTitle}>
          {/* Score: {playerRun["score"]} */}
           <span>{idToDungeon(playerRun["dung"])}</span>
           <span>{playerRun["lvl"]}</span>
           <span>{secondsToHMS(playerRun["time"])}</span>
          {/* <div>{isActive ? '-' : '+'}</div> */}
        </div>
        <div className={styles.accordionAltContent}> {playerRun["pnames"][0]}, {playerRun["pnames"][1]}, {playerRun["pnames"][2]}, {playerRun["pnames"][3]}, {playerRun["pnames"][4]}</div>
      </div>
    );
};

export default PlayerRunsAcc;