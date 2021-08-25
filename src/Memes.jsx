import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Meme from './Meme';
import { v4 as uuidv4 } from 'uuid';

const Memes = () => {
    const dispatch = useDispatch();
    const INITIAL_STATE = {
        id: "",
        upperText: "",
        lowerText: "",
        imgUrl: ""}
    const [formData, setFormData] = useState(INITIAL_STATE);
    const memes = useSelector(store => store.memes);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }   

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newMeme = {...formData, id: uuidv4()}
        dispatch({type: 'ADD_MEME', payload: newMeme})
        setFormData(INITIAL_STATE);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="upperText" value={formData.upperText} onChange={handleChange} placeholder="Upper Text"/>
                <input type="text" name="lowerText" value={formData.lowerText} onChange={handleChange} placeholder="Lower Text"/>
                <input type="text" name='imgUrl' value={formData.imgUrl} onChange={handleChange} placeholder="Image URL" />
                <button type="submit">Submit</button>
            </form>
            {memes.map(meme => <Meme key={meme.id} meme={meme} />)}
         </div>
    )
    }
export default Memes;
