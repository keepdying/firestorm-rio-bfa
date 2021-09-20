import React from "react";

import { idToDungeon, secondsToHMS, timeConverter, timerCalculator, returnAffixText} from "../../utils";

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
    case "Operation: Mechagon (Workshop)": return "https://firestorm-servers.com/assets/img/dungeons/dungeon_2097_370.jpg"
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
          {/* Score:  */}
           <span>{idToDungeon(playerRun["dung"])}</span>
           <span>{playerRun["lvl"]}, {secondsToHMS(playerRun["time"])}, {timerCalculator(playerRun["dung"], playerRun["time"])}</span>
           <span>{returnAffixText(playerRun["affixes"])}</span>
           <span>Completed on: {timeConverter(playerRun["timestamp"])}</span>
           <span>{playerRun["score"]}pts.</span>
          {/* <div>{isActive ? '-' : '+'}</div> */}
        </div>
        <div className={styles.accordionAltContent}> <div className={`${styles[`color_${playerRun["pclasses"][0]}`]}`}>{playerRun["pnames"][0]}</div>, <div className={`${styles[`color_${playerRun["pclasses"][1]}`]}`}>{playerRun["pnames"][1]}</div>, <div className={`${styles[`color_${playerRun["pclasses"][2]}`]}`}>{playerRun["pnames"][2]}</div>, <div className={`${styles[`color_${playerRun["pclasses"][3]}`]}`}>{playerRun["pnames"][3]}</div>, <div className={`${styles[`color_${playerRun["pclasses"][4]}`]}`}>{playerRun["pnames"][4]}</div></div>
      </div>
    );
};

export default PlayerRunsAcc;