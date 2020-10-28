import * as types from '../constants/ActionTypes'

let initalState = {
    id: '',
    name: '',
    status: false
};

const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            return action.task;

        default:
            return state;
    }
};

export default appReducer;