import React, {useState} from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {filtertheTodo, edittheTodo} from '../actions';
import { useDispatch } from 'react-redux';

const Task = ({ todo }) => {
   let dispatch = useDispatch();
   const [editstate, setEditState]= useState(false);
   const [name, setName] = useState(todo.name);
  return (
    <div className="Container-To-Do">
    
      <Card style={{ width: '18rem' }}>
  <Card.Header># {todo.TaskId}</Card.Header>
  
  <ListGroup variant="flush">
    {editstate ? <input 
    type="text" 
    value={name}
    onChange={(e)=> setName(e.target.value)}
    ></input> : <ListGroup.Item>{todo.name}</ListGroup.Item> }
     <ListGroup.Item>{todo.isDone ? "Done! " : "Not Done yet !"}</ListGroup.Item> 
    <div className="btn">
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            dispatch(edittheTodo(
{
  ...todo,
  name : name
}
            ));
            if( editstate){
              setName(todo.name)
            }
            setEditState(!editstate);
            
          }
           }
        >
         {editstate ? "Updaet" : "EDIT task"} 
        </Button>

        <Button
          variant="primary"
          type="submit"
          onClick={() => dispatch(filtertheTodo(todo.TaskId))}
        >
          Delete task
        </Button>
      </div>
  </ListGroup>
</Card>
    </div>
  );
};
export default Task;
