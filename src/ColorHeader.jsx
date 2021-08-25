import React from 'react';
import {useSelector} from 'react-redux';


const ColorHeader = () => {
   
    const color = useSelector(store => store.color);
    console.log("Color header", color)

    return (
        <div>
            <h1 style={{color}}>Color is: {color}</h1>
      

        </div> )
}

export default ColorHeader;