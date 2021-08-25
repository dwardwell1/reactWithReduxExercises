import './Meme.css'
import { useDispatch} from 'react-redux'
function Meme({meme}) {
    const dispatch = useDispatch();
    const deleteMeme = () => {
        console.log("trying to delete ", meme.id);
        dispatch({type: 'REMOVE_MEME', payload: meme.id});}
    return (
        <div>
        <div className="meme"  style={{backgroundImage: `url(${meme.imgUrl})`}}>
           
            {/* <img src={meme.imgUrl} alt=""/> */}
            <p className="top">{meme.upperText}</p>
            <p className="bottom">{meme.lowerText}</p>
            
        </div>
        <button onClick={deleteMeme}>Delete</button>
        </div>
    );
}

export default Meme;