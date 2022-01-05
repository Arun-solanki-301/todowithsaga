import * as action from "../constant";
import { fork, all, takeLatest } from "redux-saga/effects";
import { addTodo } from "./addTodoSaga";
import { getTodo } from "./getTodoSaga";

function* addTodoSagas() {
  yield takeLatest(action.ADD_TODO_REQUEST, addTodo);
}

function* getTodoSagas() {
  yield takeLatest(action.GET_TODO_REQUEST, getTodo);
}

export default function* rootSaga() {
  yield all([fork(addTodoSagas), fork(getTodoSagas)]);
}
