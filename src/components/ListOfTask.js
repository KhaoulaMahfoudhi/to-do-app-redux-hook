import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const ListOfTask = () => {
  
  let todos = useSelector((state) => state);
  return (
    
       <div className ="container">
        {todos.length > 0 &&
          todos.map((todo) => <Task key={todo.TaskId} todo={todo} />)}
      </div>
      
     
  );
};

export default ListOfTask;
