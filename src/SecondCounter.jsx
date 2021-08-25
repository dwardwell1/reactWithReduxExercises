import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


const FirstCounter = () => {
    const dispatch = useDispatch();
    const count = useSelector(store => store.count);
    console.log("I AM BEING CALLED", count)
    const increment = () => dispatch({type: 'INCREMENT'});
    const decrement = () => dispatch({type: 'DECREMENT'});
    return (
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </div> )
}

export default FirstCounter;