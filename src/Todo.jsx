
import { useDispatch} from 'react-redux'
function Todo({todo}) {
    const dispatch = useDispatch();
    const deleteTodo = () => {
        console.log("trying to delete ", todo.id);
        dispatch({type: 'REMOVE_TODO', payload: todo.id});}
    const toggleTodo = () => {
        console.log("trying to cross off ", todo.id);
        dispatch({type: 'TOGGLE_TODO', payload: todo.id});}
    
    return (
        <li>
        <div className="todo"  >
           
           { todo.completed ? <h4 onClick={toggleTodo} style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> {todo.task} <button onClick={deleteTodo}>Delete</button></h4>  : <h4 onClick={toggleTodo} >{todo.task} <button onClick={deleteTodo}>Delete</button></h4>}
            
          
        </div>
        
        </li>
    );
}

export default Todo;