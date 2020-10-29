import * as types from '../constants/ActionTypes'

let initalState = {
    by: 'name',
    value: 1
};

const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SORT:
            console.log(action);
            return {
                by: action.sort.by,
                value: action.sort.value
            };
        default:
            return state;
    }
};

export default appReducer;