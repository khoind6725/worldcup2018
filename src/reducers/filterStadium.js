import * as Types from './../contants/ActionTypes';

const initialState = '';

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FILTER_STADIUM:
            return action.stadium;
        default:
            return state;
    }
}

export default myReducer;