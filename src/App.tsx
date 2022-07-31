import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

//Component
import { Todo } from './components/Todo';
import { Form } from './components/Form';


//hook
import { useTodoHook } from './hooks/useTodoHook';

//Types



function App() {
  
  const [todos, dispatch] = useTodoHook();

  const createTodo = (text: string):void =>{
    dispatch({
      type: "add",
      payload: {
        text  
      }
    })
  }
  const deleteTodoHandler = (id: string):void =>{
    dispatch({
      type: "delete",
      payload: {
        id
      }
    }

    )
  } 

  if(todos.length === 0){
    return <>
    <h2>Todo List</h2>
      <Form createTodo={createTodo} ></Form>
      <Todo listd={todos} deleteTodo={deleteTodoHandler}></Todo>
    <h2>Nothing to Show</h2>
    </>
  }
  return (
    <div className="App">
      
      
      <h2>Todo List</h2>
      <Form createTodo={createTodo} ></Form>
      <Todo listd={todos} deleteTodo={deleteTodoHandler}></Todo>
        
    </div>
  )
}

export default App
