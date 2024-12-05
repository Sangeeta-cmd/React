import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }])
    let [newTodo, setNewTodo] = useState("")

    function addTasks() {
        setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }])
        setNewTodo("")
    }

    let addNewTodos = (event) => {
        setNewTodo(event.target.value)
        // console.log(event.target.value)
    }

    let deleteTodos = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id != id)
        })
    }

    let upperCaseAll = () => {
        // let newArr =todos.map((todo)=>{
        //     return {
        //         ...todo,
        //         task : todo.task.toUpperCase()
        //     }
        // })
        // setTodos(newArr)       or 

        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            })
        ))
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    }
                } else {
                    return todo
                }
            })
        ))
    }

    let markAllAsDone = () => {
        setTodos((prevTodos) =>(
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                }
            })
        ))
       
    }

    let markAsDoneOne = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo)=>{ 
                if(todo.id == id){
                    return{
                        ...todo,
                        isDone : !(todo.isDone)
                    }
                }else{
                    return todo
                }
            })
        ))
    }

    return (
        <div>
            <input type="text" placeholder="enter task here" value={newTodo} onChange={addNewTodos} />
            &nbsp;&nbsp;
            <button onClick={addTasks}>Add</button>
            <br /><br />
            <br />

            <hr />
            <h3>Todo list</h3>
            <ul>
                {todos.map(
                    (todo) => (
                        <li key={todo.id}>
                            {todo.isDone === true ? 
                            <span style = {{textDecorationLine:"line-through"}}>{todo.task}</span> : <span>{todo.task}</span>
                            }
                            &nbsp; &nbsp;
                            <button onClick={() => deleteTodos(todo.id)}>delete</button>
                            &nbsp;&nbsp;
                            <button onClick={() => upperCaseOne(todo.id)}>upperCaseOne</button>
                            &nbsp;&nbsp;
                            <button onClick={() => markAsDoneOne(todo.id)}>Mark as Done</button>
                            <br /><br />
                        </li>
                    )
                )}
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCase All</button>
            <br /><br />
            <button onClick={markAllAsDone}>Mark All As Done</button>
        </div>
    )
}