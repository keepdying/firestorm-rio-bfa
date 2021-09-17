import React from "react";
import { Container } from "@material-ui/core";
import ReactPaginate from 'react-paginate';

import PlayerAccordion from '../../components/playerAccordion';

import players_json from '../../players.json'
import currentRuns from '../../runs.json';

import * as styles from "./styles.module.scss";

const playersPerPage = 25;

export default class PlayerListScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: "",
            allPlayers: [],
            filteredPlayers: [],
            visiblePlayers: [],
            page: 0
        }
        
    }

    componentDidMount(){
        let initialPlayers = players_json;
        initialPlayers.forEach((player, index) => {
            player.position = index + 1
        })

        this.setState({ allPlayers: initialPlayers, filteredPlayers: initialPlayers, visiblePlayers: initialPlayers.slice(0, playersPerPage) });
    }

    handlePageClick = (data) => {
        let page = data.selected;
        this.setState({ visiblePlayers: this.state.filteredPlayers.slice(page * playersPerPage, (page + 1) * playersPerPage), page })
    };

    updateFilteredPlayers = (event) => {
        let { page, allPlayers } = this.state;
        let searchTerm = event.target.value;
        let filteredPlayers = allPlayers.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()));
        this.setState({ searchTerm, filteredPlayers, visiblePlayers: filteredPlayers.slice(page * playersPerPage, (page + 1) * playersPerPage), page: 0 });
    }
    

    render(){
        const { state, handlePageClick } = this;
        const { visiblePlayers, filteredPlayers, page } = state; 

        return (
            <Container component="main" maxWidth="md" className={styles.playerListScreen}>
                <input
                    type="text" 
                    placeholder="Search by name..." 
                    onChange={(event) => this.updateFilteredPlayers(event)}
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
                        {visiblePlayers.map((player, index) => {
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
                <ReactPaginate
                    forcePage={page}
                    previousClassName={styles.page}
                    nextClassName={styles.page}
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={filteredPlayers.length/playersPerPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={styles.pagination}
                    pageClassName={styles.page}
                    activeClassName={styles.active}
                />
            </Container>
        )
    }
}