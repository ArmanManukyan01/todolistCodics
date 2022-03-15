import TYPE_ACTION from "../actions/TypeAction";
import { List } from "immutable";

const init = List([]);

const TodoReducers = (todos = init, action) => {
  switch (action.type) {
    //----GetData
    case TYPE_ACTION.TODO.GET:
      return List([...action.payload.data]);
    //----AddData
    case TYPE_ACTION.TODO.POST:
      return todos.push(action.payload);
    //----UpdataData
    case TYPE_ACTION.TODO.UPDATE:
      let index;
      todos.find((item, i) => {
        if (item["id"] === action.payload.itemEdit.id) {
          index = i;
        }
      });

      const arr = todos.set(index, {
        ...todos.get(index),
        text: action.payload.text,
      });
      return arr;

    //----DeleteData
    case TYPE_ACTION.TODO.DELETE:
      const newTodos = todos.splice(action.payload.index, 1);
      return newTodos;
  
    default:
      return todos;
  }
};
export default TodoReducers;
