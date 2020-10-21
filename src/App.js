import React from 'react';
import './App.css';
import ListOfTask from './components/ListOfTask';
import InputTask from './components/InputTask';


const App = props => {
 
  return (
    <div className="App">
      <InputTask />
     <ListOfTask/>
    </div>
  );
}

export default App;
