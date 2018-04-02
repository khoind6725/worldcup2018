import * as Types from './../contants/ActionTypes';

const initialState = '';

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FILTER_TEAM2:
            return action.team2;
        default:
            return state;
    }
}

export default myReducer;