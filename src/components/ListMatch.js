import React, { Component } from 'react';
import MatchItem from './MatchItem';
import { matchList } from './../datas/matchlist';
import { connect } from 'react-redux';
import { stadiums } from './../datas/stadiums';
import { nations } from './../datas/nations';
import ld from 'lodash';

class ListMatch extends Component {

    render() {
        return (
            <React.Fragment>
                {this.showMatchItem(matchList)}
            </React.Fragment>
        );
    }

    showMatchItem = (matchList) => {
        let result = null;
        let { filterGroup, filterStadium, filterTeam1, filterTeam2 } = this.props;
        if (matchList.length > 0) {
            // filter group
            matchList = matchList.filter((match) => {
                return match.group.toLowerCase().indexOf(filterGroup.toLowerCase()) !== -1;
            })

            // filter stadium
            matchList = matchList.filter((match) => {
                return this.getNameStadium(match.stadium).toLowerCase().indexOf(filterStadium.toLowerCase()) !== -1;
            })

            // filter team1
            matchList = matchList.filter((match) => {
                return this.getNameTeam(match.team1).toLowerCase().indexOf(filterTeam1.toLowerCase()) !== -1;
            })

            // filter team2
            matchList = matchList.filter((match) => {
                return this.getNameTeam(match.team2).toLowerCase().indexOf(filterTeam2.toLowerCase()) !== -1;
            })

            result = matchList.map((match, index) => {
                return <MatchItem
                    key={index}
                    match={match}
                />;
            })
        }
        return result;
    }

    getNameStadium = (id) => {
        return ld.filter(stadiums, { id })[0].name;
    }
    
    getNameTeam = (id) => {
        return ld.filter(nations, { id })[0].name;
    }
}

const mapStateToProps = state => {
    return {
        filterGroup: state.filterGroup,
        filterStadium: state.filterStadium,
        filterTeam1: state.filterTeam1,
        filterTeam2: state.filterTeam2
    }
}

export default connect(mapStateToProps, null)(ListMatch);