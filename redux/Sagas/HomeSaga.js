import { put } from "@redux-saga/core/effects";
import { addTodoItem , getTodoRequest , getTodoError } from "../Action/Action";


export function* HomeSaga(action) {
  try {
    // if (profileData) {
      yield put(addTodoItem({ response: {name : "asndf"} }));
    // } else {
    //   yield put(getTodoError({ error: "Data not fetched" }));
    // }
  } catch (error) {
    yield put(getTodoError({ error: "Data not fetched" }));
  }
}