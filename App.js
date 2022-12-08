import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import AddToDo from './MyComponents/AddToDo';
import ToDos from './MyComponents/ToDos';
import Footer from './MyComponents/Footer';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import { cleanup } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos" === null)) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    //Deleting this way in react does not work
    // let index= todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const addToDo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Router>
        <Header title="myToDosList" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddToDo addToDo={addToDo} />
                <ToDos todos={todos} onDelete={onDelete} />
                </>)
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>



        <Footer />
      </Router>
    </>
  );
}

export default App;
