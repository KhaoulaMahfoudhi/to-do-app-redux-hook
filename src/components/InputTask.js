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
            color: "white",
            fontSize: "5em",
            textAlign: "center",
          }}
        >
          
          To-Do-List
        </h1>
        <div className="input-btn">
        <input 
        style={{width: "500px",height:"45px", borderRadius:"5px", borderColor:"white"}}
        type="text" 
        placeholder="Add New Task"
        value={name} 
        onChange={(e)=> setName(e.target.value)}  />
        <Button 
          variant="light"
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
      </div>
     
  );
};

export default InputTask;
