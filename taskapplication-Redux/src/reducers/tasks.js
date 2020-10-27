import * as types from './../constants/ActionTypes'

let data = JSON.parse(localStorage.getItem('tasks'));

let initalState = data ? data : [];

let s4 = () => {
    return Math.floor((1 + Math.random()) * 0X10000).toString(16).substring(1);
}
let generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

let findIndex = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}

const appReducer = (state = initalState, action) => {
    let index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            let newTask = {
                id: action.task.id,
                name: action.task.name,
                status: (action.task.status === 'true' || action.task.status === true) ? true : false
            };
            if (!newTask.id) {
                newTask.id = generateID();
                state.push(newTask);
            } else {
                let index = findIndex(state, newTask.id);
                state[index] = newTask;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        case types.DELETE_TASK:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        default:
            return state
    }
};

export default appReducer;