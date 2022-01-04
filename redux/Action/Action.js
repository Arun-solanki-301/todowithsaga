import { createAction } from "redux-actions";
import * as constant from "../constant";

export const addTodoItem = createAction(constant.ADD_TODO_REQUEST);
export const addTodoRequest = createAction(constant.ADD_TODO_SUCCESS);
export const addTodoError = createAction(constant.ADD_TODO_ERROR);

export const getTodoItem = createAction(constant.GET_TODO_REQUEST);
export const getTodoRequest = createAction(constant.GET_TODO_SUCCESS);
export const getTodoError = createAction(constant.GET_TODO_ERROR);