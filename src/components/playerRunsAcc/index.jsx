import React from "react";

import { idToDungeon, secondsToHMS, timerCalculator } from "../../utils";

import * as styles from "./styles.module.scss";

const getDungeonImage = (dungeon) => {
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

const getAffixImage = (affix) => {
  switch(affix) {
    case 2: return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1763_244.jpg"
    case 3: return "https://firestorm-servers.com/assets/img/dungeons/dungeon_2097_369.jpg"
    case 4: return "https://wow.zamimg.com/images/wow/icons/small/spell_deathknight_necroticplague.jpg"
    case 5: return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1877_250.jpg"
    case 6: return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1862_248.jpg"
    case 7: return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1822_353.jpg"
    case 8: return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1841_251.jpg"
    case 9: return "https://wow.zamimg.com/images/wow/icons/small/achievement_boss_archaedas.jpg"
    case 10: return "https://firestorm-servers.com/assets/img/dungeons/dungeon_2097_370.jpg"
    case 11: return "https://wow.zamimg.com/images/wow/icons/small/ability_ironmaidens_whirlofblood.jpg"
    case 12: return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1864_252.jpg"
    case 13: return "https://wow.zamimg.com/images/wow/icons/small/spell_fire_felflamering_red.jpg"
    case 14: return "https://firestorm-servers.com/assets/img/dungeons/dungeon_1762_249.jpg"
    case 120: return "https://wow.zamimg.com/images/wow/icons/small/trade_archaeology_nerubian_obelisk.jpg"
    default: return null;
  }
}
const PlayerRunsAcc = ({ playerRun }) => {
    return (
      <div className={styles.accordionAltItem}>
        <div className={styles.accordionAltTitle}>
          <span className={styles.mainItem}>
            <img src={getDungeonImage(idToDungeon(playerRun["dung"]))} alt={idToDungeon(playerRun["dung"])} />
            {idToDungeon(playerRun["dung"], "abbr")}
          </span>
          <span>
            {playerRun["lvl"]}
            <span className={styles.stars}>{timerCalculator(playerRun["dung"], playerRun["time"])}</span> 
          </span>
          <span>{secondsToHMS(playerRun["time"])}</span>
          <span>
            {
              playerRun["affixes"] && 
              playerRun["affixes"].map((affix, index) => {
                return (
                  <img src={getAffixImage(affix)} alt={affix} key={"affix_" + index} />
                )
              })  
            }
          </span>
          <span className={styles.group}>
            <div className={styles.tank}>
              <img src="https://cdnassets.raider.io/assets/img/role_tank-6cee7610058306ba277e82c392987134.png" alt="tank" />
              <span className={`${styles[`color_${playerRun["pclasses"][0]}`]}`}>{playerRun["pnames"][0]}</span>
            </div>
            <div className={styles.heal}>
              <img src="https://cdnassets.raider.io/assets/img/role_healer-984e5e9867d6508a714a9c878d87441b.png" alt="healer" /> 
              <span className={`${styles[`color_${playerRun["pclasses"][1]}`]}`}>{playerRun["pnames"][1]}</span>
            </div>
            <div className={styles.dps}>
              <img src="https://cdnassets.raider.io/assets/img/role_dps-eb25989187d4d3ac866d609dc009f090.png" alt="dps" />
              <span className={`${styles[`color_${playerRun["pclasses"][2]}`]}`}>{playerRun["pnames"][2]}</span> 
              <span className={`${styles[`color_${playerRun["pclasses"][3]}`]}`}>{playerRun["pnames"][3]}</span> 
              <span className={`${styles[`color_${playerRun["pclasses"][4]}`]}`}>{playerRun["pnames"][4]}</span>
            </div>
          </span>
          <span>{playerRun["score"]}</span>
        </div>
        {/* <div className={styles.accordionAltContent}> 
          <span>Completed on: {timeConverter(playerRun["timestamp"])}</span>
         
        </div> */}
      </div>
    );
};

export default PlayerRunsAcc;