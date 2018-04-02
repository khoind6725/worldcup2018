import * as Types from './../contants/ActionTypes';

const initialState = '';

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FILTER_TEAM1:
            return action.team1;
        default:
            return state;
    }
}

export default myReducer;