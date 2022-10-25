import React from "react";
import eyeCut from './eyeCut.png';
import Eye from './Eye.png';
import Arrow from './Arrow.png';
const ShowIcon =()=>
{
    return(
       

        <div><img src={eyeCut} alt='' className='Icon' ></img>
    
    
        <img src={Eye} alt='' className='Icon' ></img>
        
        <img src={Arrow} alt='' className='Icon' ></img></div>
        
       
    )
}
export default ShowIcon