import React, { useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

const ListOfTask = () => {
  let todos = useSelector((state) => state);
  const DoneTaskslist = useSelector((state) =>
    state.filter((todo) => todo.isDone)
  );
  const UnDoneTaskslist = useSelector((state) =>
    state.filter((todo) => todo.isDone === false)
  );
  const [filterDone, setFilterDone] = useState(false);
  const [filterUnDone, setFilterUnDone] = useState(false);

  const filterDoneTasks = () => {
    setFilterUnDone(false);
    setFilterDone(true);
  };
  const filterUnDoneTasks = () => {
    setFilterDone(false);
    setFilterUnDone(true);
  };
  const showAll = () => {
    setFilterUnDone(false);
    setFilterDone(false);
  };
  return (
    <div>
      <div>
        <Button variant="primary" onClick={filterDoneTasks}>
          Done Tasks
        </Button>
        <Button variant="primary" onClick={filterUnDoneTasks}>
          Undone Tasks
        </Button>
        <Button variant="primary" onClick={showAll}>
          All Tasks
        </Button>
      </div>
      <div className="container">
        {(filterDone || filterUnDone) === false
          ? todos.map((todo) => <Task key={todo.TaskId} todo={todo} />)
          : null}
        {filterDone
          ? DoneTaskslist.map((todo) => <Task key={todo.TaskId} todo={todo} />)
          : null}
        {filterUnDone
          ? UnDoneTaskslist.map((todo) => (
              <Task key={todo.TaskId} todo={todo} />
            ))
          : null}
      </div>
    </div>
  );
};

export default ListOfTask;
