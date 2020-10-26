import { combineReducers } from 'redux';
import tasks from './tasks'

const appReducer = combineReducers({
    tasks // tasks: tasks
});

export default appReducer;