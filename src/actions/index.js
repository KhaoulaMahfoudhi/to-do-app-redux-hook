export const ADD_TASK = "ADD_TASK";
export const FILTER_TASK = "FILTER_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const  DONE_TASK = " DONE_TASK";
//create Actions
export const addnewTodo = (todo) => {
    return {
      type: ADD_TASK,
      payload: todo 
    };
  };

  export const filtertheTodo = (todoId) => {
    return {
      type: FILTER_TASK,
      payload: todoId
    };
  };

  export const edittheTodo = (todo) => {
    return {
      type: EDIT_TASK,
      payload:todo
    };
  };

  export const donetheTodo = (todo) => {
    return {
      type: DONE_TASK,
      payload:todo
    };
  };
  