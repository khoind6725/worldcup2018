import React, { Component } from 'react';
import { nations } from './../datas/nations';
import { stadiums } from './../datas/stadiums';
import ld from 'lodash';

class MatchItem extends Component {
    render() {
        let { index, time, group, stadium, team1, result, team2 } = this.props.match;
        return (
            <tr>
                <td>{index}</td>
                <td>{this.formatDateTime(time)}</td>
                <td>{group}</td>
                <td>{this.showNameStadium(stadium)}</td>
                <td>
                    <p
                        style={{
                            float: 'left',
                            margin: 0,
                            verticalAlign: 'middle',
                            lineHeight: 2,
                            width: '70%'
                        }}
                    >
                        {this.showNameNation(team1)}
                    </p>
                    <div>
                        <img
                            src={this.showFlagOfTeam(team1)}
                            style={{
                                float: 'right',
                                width: '50px',
                                height: '30px'
                            }}
                            alt={this.showNameNation(team1)}
                        />
                    </div>
                </td>
                <td>{result[0] + ' - ' + result[1]}</td>
                <td>
                    <div>
                        <img
                            src={this.showFlagOfTeam(team2)}
                            style={{
                                float: 'left',
                                width: '50px',
                                height: '30px'
                            }}
                            alt={this.showNameNation(team2)}
                        />
                    </div>     
                    <p
                        style={{
                            float: 'right',
                            margin: 0,
                            verticalAlign: 'middle',
                            lineHeight: 2,
                            width: '70%'
                        }}
                    >
                        {this.showNameNation(team2)}
                    </p>  
                </td>
            </tr>
        );
    }

    showNameNation = (id) => {
        return ld.filter(nations, { id })[0].name;
    }

    showNameStadium = (id) => {
        return ld.filter(stadiums, { id })[0].name;
    }

    showFlagOfTeam = (id) => {
        return ld.filter(nations, { id })[0].flag_url;
    }

    formatDateTime = (datetime = '00000000') => {
        let hour = datetime.substring(0, 2);
        let min = datetime.substring(2, 4);
        let date = datetime.substring(4, 6);
        let month = datetime.substring(6, 8);
        return hour + ':' + min + ' ' + date + '/' + month;
    }
}

export default MatchItem;