import React, { useState } from 'react'

const AddToDo = ({addToDo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    }
    else{
    addToDo(title, desc);
    let setTitle=("");
    let setDesc=("");
   }
  }
  return (
    <div className="container my-3">
      <h3>Add A ToDo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">ToDo Title</label>
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="titleDiscription" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">ToDo Description</label>
          <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
        </div>

        <button type="submit" className="btn btn-sm btn-success">Add ToDo</button>
      </form>
    </div>
  )
}

export default AddToDo
