import { createStore } from "redux";
import Reducer from './reducers/Reducer';
// import {addnewTodo} from "./actions";
export let store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  //consoleLog
 store.subscribe(() => console.log(store.getState()));
 //dispatch the action
// store.dispatch(addnewTodo());