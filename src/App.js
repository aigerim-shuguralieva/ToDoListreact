import { useState, useEffect } from "react";
import { TodoItem } from "./components/TodoItem";
import "./App.css";
import {Context} from './context'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  const createTodo = () => {
    let arr = [...todos, { text: inputValue, complete: false }]
    if (inputValue){
      //modify todos
      setTodos(arr);
      //clear input
    setInputValue("")
    //save in local storage
    localStorage.setItem("todos",JSON.stringify(arr))
    }  
  };

  useEffect(() => {
    //getting value of loca;storage
    let localTodos = JSON.parse(localStorage.getItem("todos"))

    //check for empty of localstorage
    localTodos && setTodos(localTodos)
  }, []);

const updateLocalToodos = (arr) => {
  localStorage.setItem("todos", JSON.stringify(arr))
}
  const completeTodo = (id) => {
    let arr = [...todos]
    arr[id].complete = !arr[id].complete
    setTodos(arr)
    updateLocalToodos(arr)
  }
  
  const deleteTodo = (id) => {
  let arr = [...todos];
  arr.splice(id,1)
  setTodos(arr)
  updateLocalToodos(arr)
  }
  return (
    <Context.Provider value={{ deleteTodo, completeTodo }}>
    <div className="App">
      <h2 className="title">ToDo List</h2>
      <div>
        <input
          placeholder="Add   text here  ..."
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button className="btn" onClick={createTodo}>Add</button>
      </div>
      {todos && 
        todos.map((el, id) => {
        return <TodoItem 
         todo={el} 
         id={id} 
         key={id} />;
      })}
    </div>
    </Context.Provider>

  );
}
export  {App};