//Types
import { List } from '../types/types';

  interface Props{
    listd: List[]; 
    deleteTodo: (id:string) =>void;
  }

export const Todo = ({listd,deleteTodo}:Props)=>{
    return(
        <ul>
        {listd.map(todo=>{
          return<li key={todo.id}>
            <h3>{todo.text}</h3>
            <p>{todo.date}</p>
            <p>{todo.country?.name}</p>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </li>
        })}
      </ul>
    )
}