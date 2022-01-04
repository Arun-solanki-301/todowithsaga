import * as action from "../constant";
import { fork, all, takeLatest } from "redux-saga/effects";
import { HomeSaga } from "./HomeSaga";

function* TodoSaga() {
  yield takeLatest(action.GET_TODO_REQUEST, HomeSaga);
  yield takeLatest(action.ADD_TODO_REQUEST, HomeSaga);
}

export default function* rootSaga() {
  yield all([fork(TodoSaga)]);
}