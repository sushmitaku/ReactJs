import React from "react";
import {Link} from 'react-router-dom'
const ReceivedOrder=()=>
{
  return(
    <div>
    <div>Pending Signature
     <div>Orders
        <h3>15</h3>
     </div>
     <div>Episodes
        <h3>15</h3>
     </div>
     <div>Expected Revenue</div>
     <h3>$1000</h3>
    </div>
    <Link to="/">view Details</Link>
     
    </div>
  )
}
export default ReceivedOrder