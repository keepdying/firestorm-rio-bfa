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
          <Container maxWidth="md" className={styles.accordionContent}> 
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