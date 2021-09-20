import React, { useState } from "react";
import { Modal, Container } from "@material-ui/core"

import PlayerRunsAcc from "../playerRunsAcc";

import { returnPlayerRuns } from "../../utils";

import * as styles from "./styles.module.scss";

const PlayerAccordion = ({ player, currentRuns, index }) => {
    const [isActive, setIsActive] = useState(false);
    //let playerRuns = returnPlayerRuns(player.bruns, currentRuns);
    return (
      <div key={`player_${index}`} className={`${styles.accordionItem} ${styles[`player${player.position}`]}`}>
        <div className={styles.accordionTitle} onClick={() => setIsActive(!isActive)}>
          <div>{player.position}</div>
          <div className={`${styles[`color_${player.pclass}`]}`}>{player.name}</div>
          <div>{player.fsio}</div>
          {/* <div>{isActive ? '-' : '+'}</div> */}
        </div>
        <Modal
          open={isActive}
          onClose={() => setIsActive(false)}
        >
          <Container maxWidth="lg" className={styles.accordionContent}> 
            <div className={styles.runHeader}>
              <strong className={styles.mainHeader}>Dungeon</strong>
              <strong>Level</strong>
              <strong>Time</strong>
              <strong>Affixes</strong>
              <strong className={styles.group}>
                Group
              </strong>
              {/* <strong>
                Tank
                <img src="https://cdnassets.raider.io/assets/img/role_tank-6cee7610058306ba277e82c392987134.png" alt="tank" />
              </strong>
              <strong>
                Healer
                <img src="https://cdnassets.raider.io/assets/img/role_healer-984e5e9867d6508a714a9c878d87441b.png" alt="healer" />
              </strong>
              <strong className={styles.wide}>
                DPS
                <img src="https://cdnassets.raider.io/assets/img/role_dps-eb25989187d4d3ac866d609dc009f090.png" alt="dps" />
              </strong> */}
              <strong>Score</strong>
            </div>
            {
              returnPlayerRuns(player.bruns, currentRuns).map((playerRun, index) => {
              return (<PlayerRunsAcc playerRun={playerRun}/>)}
            )} 
          </Container>
        </Modal>
      </div>
    );
};

export default PlayerAccordion