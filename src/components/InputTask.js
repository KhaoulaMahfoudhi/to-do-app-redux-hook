import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {addnewTodo} from '../actions';
import { useDispatch } from 'react-redux';


const  InputTask = () => {
  let [name, setName]= useState('');
  let dispatch = useDispatch();
  return (
    <div>
        <div className="input-text">
        <h1
          style={{
            color: "blue",
            fontSize: "5em",
            textAlign: "center",
          }}
        >
          
          To-Do-List
        </h1>
        <input 
        type="text" 
        value={name} 
        onChange={(e)=> setName(e.target.value)}  />
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
           dispatch( addnewTodo(
            {
              TaskId: Math.floor(Math.random() * 100),
              name : name
            }
          ))
          setName(' ');
          }}
        >
          Add task
        </Button>
        </div>
      </div>
     
  );
};

export default InputTask;
