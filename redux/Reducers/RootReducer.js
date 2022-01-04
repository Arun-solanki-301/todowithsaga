import { combineReducers } from "redux";
import addTodoReducer from "./addTodoReducer";
import getTodoReducer from "./getTodoReducer";
const rootReducer = combineReducers({
    addTodoData : addTodoReducer,
    getTodoData : getTodoReducer
})  
export default rootReducer;