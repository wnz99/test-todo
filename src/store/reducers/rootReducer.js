import { combineReducers } from 'redux';
import tasksReducer from './tasks';

const reducers = { tasks: tasksReducer };

const rootReducer = combineReducers(reducers);

export default rootReducer;
