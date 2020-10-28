import * as types from './../constants/ActionTypes'

let initalState = '';

const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.keyword;
        default:
            return state;
    }
};

export default appReducer;