import * as types from './../constants/ActionTypes'

let data = JSON.parse(localStorage.getItem('tasks'));

let initalState = data ? data : [];

let s4 = () => {
    return Math.floor((1 + Math.random()) * 0X10000).toString(16).substring(1);
}
let generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            let newTask = {
                id: generateID(),
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state
    }
};

export default appReducer;