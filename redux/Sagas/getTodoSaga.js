import { put } from "@redux-saga/core/effects";
import { getTodoSuccess, getTodoError } from "../Action/Action";


export function* getTodo(action) {
  console.log(action , "addTodo saga")
  try {
    // if (profileData) {
      // yield put(getTodoSuccess());
      yield put(getTodoSuccess({data: action.payload}));
      // } else {
    //   yield put(getTodoError({ error: "Data not fetched" }));
    // }
  } catch (error) {
    console.log(error)
    yield put(getTodoError({ error: "Data not fetched" }));
  }
} 