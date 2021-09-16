import React from "react";
import { Container } from "@material-ui/core";

import PlayerAccordion from '../../components/playerAccordion';

import players_json from '../../players.json'
import currentRuns from '../../runs.json';

import * as styles from "./styles.module.scss";

export default class PlayerListScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: "",
            players: []
        }
        
    }

    componentDidMount(){
        let initialPlayers = players_json;
        initialPlayers.forEach((player, index) => {
            player.position = index + 1
        })

        this.setState({ players: initialPlayers });
    }
    render(){
        const { searchTerm, players } = this.state; 

        return (
            <Container component="main" maxWidth="md" className={styles.playerListScreen}>
                <input
                    type="text" 
                    placeholder="Search by name..." 
                    onChange={(event) => this.setState({ searchTerm: event.target.value })}
                />
                <div className={styles.playerList}>
                    <div className={styles.listHeaders}>
                        <div className={styles.listHeader}>
                            Position
                        </div>
                        <div className={styles.listHeader}>
                            Player
                        </div>
                        <div className={styles.listHeader}>
                            Score
                        </div>
                    </div>
                    <div className={styles.listValues}>
                        {players.filter((player) => {
                            if (searchTerm === '') {
                            return player
                            } else if (player.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return player
                            }
                            return undefined

                        } ).map((player, index) => {
                            return (
                                <PlayerAccordion 
                                    index={index}
                                    player={player} 
                                    currentRuns={currentRuns}
                                />
                            )}
                        )}
                    </div>
                </div>
            </Container>
        )
    }
}