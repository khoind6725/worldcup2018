import * as Types from './../contants/ActionTypes';

const initialState = '';

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FILTER_GROUP:
            return action.group;
        default:
            return state;
    }
}

export default myReducer;