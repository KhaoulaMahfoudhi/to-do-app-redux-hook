
import {todos} from '../components/ListData';
import {ADD_TASK,  FILTER_TASK, EDIT_TASK } from '../actions';

let Reducer = (state = todos, action) =>{
  let newTodos;
    // eslint-disable-next-line default-case
    switch (action.type){

        case ADD_TASK:
        newTodos = [...state];
        newTodos.push(action.payload);
        return newTodos;
        case FILTER_TASK:
          newTodos = [...state];
          newTodos = newTodos.filter(todo => todo.TaskId !== action.payload);
          return newTodos;
          case EDIT_TASK:
            newTodos = [...state];
            let index = -1;
            for (let i=0 ; i< newTodos.length; i++){
              index ++;
              // eslint-disable-next-line eqeqeq
              if (newTodos[i].TaskId == action.payload.TaskId){
                break;
              }
            }
            // eslint-disable-next-line eqeqeq
            if (index != -1){
        newTodos[index] = action.payload;
        
             return newTodos;
            } 
      }
      return state;
         };
         export default Reducer;