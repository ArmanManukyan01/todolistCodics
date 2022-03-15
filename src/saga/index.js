// saga effects
import { all } from "redux-saga/effects";

// saga
import {
    watchGetTodosSaga,
    watchAddTodoSaga,
    watchRemoveTodo,
    watchHandleUpdate,
} from "./todoSaga";

export default function* rootSaga() {
    yield all([
        watchGetTodosSaga(),
        watchAddTodoSaga(),
        watchRemoveTodo(),
        watchHandleUpdate(),
    ]);
}
