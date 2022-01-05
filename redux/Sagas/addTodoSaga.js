import { put } from "@redux-saga/core/effects";
import { addTodoError, addTodoSuccess } from "../Action/Action";


export function* addTodo(action) {
  console.log(action , "addTodo saga")
  try {
    // if (profileData) {
      // yield put(getTodoSuccess());
      yield put(addTodoSuccess({data: action.payload}));
      // } else {
    //   yield put(getTodoError({ error: "Data not fetched" }));
    // }
  } catch (error) {
    console.log(error)
    yield put(addTodoError({ error: "Data not fetched" }));
  }
} 