import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);

  function handleClick() {
    console.log("Title: " + title);
    console.log("Description: " + description);

    setTodo([...todo, {title, description}]);

    console.log(todo);

  }


  return <div>
      <h1 style={{display: 'flex', justifyContent: 'center'}}>
        Simple To-do Application
      </h1>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px'}}>
        <div>
          <input type="text" placeholder='Add title' onChange={(e) => {
            setTitle(e.target.value)
          }} />
        </div>
        <div>
          <input type="text" placeholder='Add description' onChange={(e) => {
            setDescription(e.target.value)
          }} />
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <button onClick={handleClick}>Add Task</button>
      </div>
        <div>
          Todo List Will appear here
        </div>
      {todo.map((item) => (  
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <button>Delete</button>
        </div>
      ))}
    </div>
}

export default App
