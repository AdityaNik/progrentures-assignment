import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);

  async function handleClick() {
    console.log("Title: " + title);
    console.log("Description: " + description);


    const newTodo = {
      title, 
      description
    }

    const res = await axios.post('http://localhost:3000/todos', newTodo)
    console.log(res.data);

    setTodo([...todo, {title, description}]);
    console.log(todo);
  }

  async function handleDelete(id) {
    console.log("ID is: " + id);

    const res = await axios.delete('http://localhost:3000/todos/' + id);
    console.log(res.data);
    setTodo(todo.filter(item => item.id !== id));
  }


  useEffect(() => {
    async function getTodos() {
      const res = await axios.get('http://localhost:3000/todos');
      setTodo(res.data);
  
      console.log("res is: " + res.data);
    }
    getTodos();
  }, [])


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
          <button onClick={() => {
            handleDelete(item.id)
          }}>Delete</button>
        </div>
      ))}
    </div>
}

export default App
