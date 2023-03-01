import { combineReducers, createStore } from "redux";
import {tasksReducer} from './reducer'

const rootReducer = combineReducers({
    tasksList: tasksReducer,
});

 const store = createStore(rootReducer);
 export default store;