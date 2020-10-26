import * as types from './../constants/ActionTypes'

let data = JSON.parse(localStorage.getItem('tasks'));

let initalState = data ? data : [];

const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;

        default:
            return state
    }
};

export default appReducer;