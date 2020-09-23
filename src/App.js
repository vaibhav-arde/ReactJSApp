import React from 'react';
import './App.css';
import Counter from './component/Counter'
import C06GetTime from './component/C06GetTime'
import Events from "./component/Events";
import Form from "./component/Form";
import LoginFormSubmit from "./component/LoginFormSubmit";
import LoginFormSubmit2 from "./component/LoginFormSubmit2";
import ToDoApp from "./component/ToDoApp";

function App() {
  return (
    <>
      <br></br>
      <hr/>
      < ToDoApp />
      <hr />
      < LoginFormSubmit2 />
      <hr />
      < LoginFormSubmit />
      <hr />
      < Form />
      <hr />
      < Events />
      <hr />
      < Counter />
      <hr />
      < C06GetTime />
      <hr />
    </>
  )
}

export default App;
