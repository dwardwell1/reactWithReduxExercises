
const INITIAL_STATE = {count:0, color:'red', memes:[{id:'1',upperText:'IMA', lowerText:'PrOFeSSioNaL', imgUrl:"https://blog.hubspot.com/hubfs/how-to-make-a-meme.jpg"}], todos:[{id:'1',task:'Make Todo app', completed:false}]};
function rootReducer(state=INITIAL_STATE, action){
    switch(action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        case 'ADD_MEME':
            return {...state, memes: [...state.memes, action.payload]}
        case 'REMOVE_MEME':
            return {...state, memes: state.memes.filter(meme => meme.id !== action.payload)}
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]}
        case 'TOGGLE_TODO':
            return {...state, todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)}
        case 'REMOVE_TODO':
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        default:
            return state
}}


export default rootReducer;