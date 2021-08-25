import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {
    const dispatch = useDispatch();
    const INITIAL_STATE = {
        id: "",
        task: "",
        completed: false}
    const [formData, setFormData] = useState(INITIAL_STATE);
    const todos = useSelector(store => store.todos);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }   

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {...formData, id: uuidv4()}
        dispatch({type: 'ADD_TODO', payload: newTodo})
        setFormData(INITIAL_STATE);

    }

    return (
        <div>
            <h1>Todays Todos</h1>
            <h3>New Todo Form:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={formData.task} onChange={handleChange} placeholder="Whats the task?"/>
                <button type="submit">Add Todo</button>
            </form>
            <ul>
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
            </ul>
         </div>
    )
    }
export default Todos;