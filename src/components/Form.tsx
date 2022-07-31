import { useState } from 'react';

interface Props {
    createTodo: (text:string) => void;
    
}
export const Form = ({createTodo}:Props) =>{
    const [todoText,settodoText] = useState<string>("");
    const SubmitHandler =(e:React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        if(todoText === "") return;
        createTodo(todoText);
        e.currentTarget.reset();
        settodoText("");
    }
    const changeHandler = (e: React.FormEvent<HTMLInputElement>):void =>{
        settodoText(e.currentTarget.value)
    }
    return(
        <form onSubmit={SubmitHandler}>
            <input type="text" name="newTask" onChange={changeHandler}></input>
            <button type="submit" disabled={!todoText}>CreateTask</button>
        </form>
    )
}