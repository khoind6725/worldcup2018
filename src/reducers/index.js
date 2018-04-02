import { combineReducers } from 'redux';
import filterGroup from './filterGroup';
import filterTeam1 from './filterTeam1';
import filterTeam2 from './filterTeam2';
import filterStadium from './filterStadium';

const myReducer = combineReducers({
    filterGroup,
    filterTeam1,
    filterTeam2,
    filterStadium
});

export default myReducer;