import React, { Component } from 'react';
import { connect} from 'react-redux';
import * as actions from './../actions/index';

class ControlFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterGroup: '',
            filterStadium: '',
            filterTeam1: '',
            filterTeam2: ''
        }
    }

    onChange = (e) => {
        let { target } = e;
        let { name, value } = target;
        switch (name) {
            case 'filterGroup':    
                this.props.filterGroup(value);
                break; 
            case 'filterStadium':
                this.props.filterStadium(value);
                break;
            case 'filterTeam1':
                this.props.filterTeam1(value);
                break;
            case 'filterTeam2':
                this.props.filterTeam2(value);
                break;
            default:
                break;
        }
        this.setState({
            [name] : value
        })
    }

    render() {
        let { filterGroup, filterStadium, filterTeam1, filterTeam2 } = this.state;
        return (
            <tr>
                <td></td>
                <td></td>
                <td>
                    <input type="text" onChange={this.onChange} value={filterGroup} name="filterGroup" className="form-control" />
                </td>
                <td>
                    <input type="text" onChange={this.onChange} value={filterStadium} name="filterStadium" className="form-control" />
                </td>
                <td>
                    <input type="text" onChange={this.onChange} value={filterTeam1} name="filterTeam1" className="form-control" />
                </td>
                <td></td>
                <td>
                    <input type="text" onChange={this.onChange} value={filterTeam2} name="filterTeam2" className="form-control" />
                </td>
            </tr>
        );
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterGroup: (group) => {
            dispatch(actions.filterGroup(group));
        },
        filterStadium: (stadium) => {
            dispatch(actions.filterStadium(stadium));
        },
        filterTeam1: (team1) => {
            dispatch(actions.filterTeam1(team1));
        },
        filterTeam2: (team2) => {
            dispatch(actions.filterTeam2(team2));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlFilter);