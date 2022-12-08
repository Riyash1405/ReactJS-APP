import React from 'react'
import ToDoItem from './ToDoItem';

export const ToDos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "50px auto"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className=' my-3'>ToDos List</h3>
      {props.todos.length === 0 ? "Not Todos to display" :
        props.todos.map((todo) => {
          return (<ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />  
           )
        })
      }

    </div>
  )
}

export default ToDos
