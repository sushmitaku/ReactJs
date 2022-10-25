import React from 'react'
import hnts from './hnts.png';
import Healthcare from './Healthcare.png';
import Notification from './Notification.png';
import user from './user.png';

import "./header.css";
 const Header= ()=>{
  return (
 
    <div className='row'>
    <div className='col-12 col-lg-6 '> 
    <img src={hnts} alt='' className='headerLogo' ></img>

    <select name="Hospital" className='boarder'>
    <option value="Clinical" selected>Clinical</option>
    <option value=""></option>
    <option value=""></option>
    
  </select>
  <select name="Hospital" className='boarder'  >
    <option value="Business Development" selected>Business Development</option>
    <option value=""></option>
    <option value=""></option>
    
  </select>
  <select name="Hospital" className='admin' >
    <option value="Admin" selected>Admin</option>
    <option value=""></option>
    <option value=""></option>
    
  </select>
  
   

    </div>
    <div className='col-12 col-lg-6 d-flex justify-content-end'>
    <img src={Healthcare} alt='' className='headerLogo' ></img>
    
    
    <img src={Notification} alt='' className='headerLogo' ></img>
    
    <img src={user} alt='' className='headerLogo' ></img>
    
    
     </div>
     </div>
    
    
  )
}

export default Header