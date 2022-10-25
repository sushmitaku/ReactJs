import React from "react";
import {Link} from 'react-router-dom'
const ToBeSent=()=>
{
  return(
    <div>
    <div>To Be Sent
     <div>Orders
        <h3>20</h3>
     </div>
     <div>Episodes
        <h3>20</h3>
     </div>
     <div>Revenue on hold</div>
     <h3>$1000</h3>
    </div>
    <Link to="/">view Details</Link>
    </div>
  )
}
export default ToBeSent