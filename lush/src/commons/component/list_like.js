import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {useState} from "react";


function Like(){
    const [like, setLike]=useState(false);
    const onClick = ()=>{
        setLike(!like);
    }

    return(
        like ? <AiFillHeart size="30px" onClick={onClick}/> : <AiOutlineHeart size="30px" onClick={onClick}/>
    )
}

export default Like;