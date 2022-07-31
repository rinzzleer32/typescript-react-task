import { v4 as uuidv4 } from 'uuid';

//types
import { List,TodoAction } from '../types/types';
import { useReducer } from 'react';

const todosReducer = (state:Array<List>, action:TodoAction):List[] =>{
    switch (action.type) {
      case "add":
        return [
          ...state,{
            id: uuidv4(),
            text: action.payload.text,
            date: new Date().toLocaleDateString(),
            isDone: false,
          }
        ]
      case "delete":
        return state.filter((onetodo )=> onetodo.id!= action.payload.id); 
      case "update":
        return state.map((onetodo )=> {
        if(onetodo.id!= action.payload.id){
          return onetodo.isDone ? {...onetodo,isDone:false } : {...onetodo,isDone: true}
        }
        return onetodo;
      });   
      default:
          return state;
    }
  };
  const Initial_State: List[] = [{
    id:uuidv4(),
    text: "Learn More Typescript",
    date: new Date().toLocaleDateString(),
    isDone: false,
    country: {
      name:"venezuela",
      capital:"caracas"
    }
  },
  {
    id:uuidv4(),
    text: "Work for money",
    date: new Date().toLocaleDateString(),
    isDone: false,
  }]

  export const useTodoHook = () => useReducer(todosReducer,Initial_State);