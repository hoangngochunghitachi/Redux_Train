import * as types from '../constants/ActionTypes'

let initialState = {
    by: 'name',
    value: 1
}

const myReducer = (state = initialState, action) => {
    if (action.type === types.SORT) {
        let { by, value } = action.sort;
        return {
            sort: {
                by, value
            }
        }
    }
    return state;
}

export default myReducer;