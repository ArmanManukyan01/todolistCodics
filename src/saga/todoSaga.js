import {
    put,
    takeEvery,
    select,
    // takeLatest,
  } from "redux-saga/effects";
  import {
    add,
    get,
    remove,
    update,
  } from "../actions";
  import TYPE_ACTION from "../actions/TypeAction";
  import { axios } from "../axios";
  
  //----Worker
  function* doGetTodosSaga() {
    const response = yield axios.get("/todo").catch((err) => {
      console.log("Error:", err);
    });
    yield put(get({ data: response.data }));
  }
  
  function* doAddTodoSaga(action) {
    console.log("action:", action.payload); // See Log
    const response = yield axios.post("/todo", action.payload).catch((err) => {
      console.log("Error: ", err);
    });
  
    yield put(add(response.data));
    alert("Done");
  }
  
  function* doHandleUpdate(action) {
    const { value, callBackUpdate, itemEdit } = action.payload;
    yield axios
      .put(`/todo/${itemEdit.id}`, { ...itemEdit, text: value })
      .catch((err) => {
        console.log("Error deleting: ", err);
      });
    yield put(update({ itemEdit, text: value }));
    yield callBackUpdate();
  }
  
  function* doRemoveTodo(action) {
    const { id, index } = action.payload;
    yield axios.delete(`/todo/${id}`).catch((err) => {
      console.log("Error: ", err);
    });
    yield put(remove({ id, index }));
  }
  //----Watcher
  function* watchGetTodosSaga() {
    yield takeEvery(TYPE_ACTION.TODO.GET_SAGA, doGetTodosSaga);
  }
  
  function* watchAddTodoSaga() {
    yield takeEvery(TYPE_ACTION.TODO.POST_SAGA, doAddTodoSaga);
  }
  
  function* watchRemoveTodo() {
    yield takeEvery(TYPE_ACTION.TODO.DELETE_SAGA, doRemoveTodo);
  }
  
  function* watchHandleUpdate() {
    yield takeEvery(TYPE_ACTION.TODO.UPDATE_SAGA, doHandleUpdate);
  }
  
  export {
    watchGetTodosSaga,
    watchAddTodoSaga,
    watchRemoveTodo,
    watchHandleUpdate,
  };
  