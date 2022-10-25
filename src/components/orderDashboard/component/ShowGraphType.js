import React from "react"
const  ShowGraphType=()=>
{
    return(
        <div>
    <select name="Graph" className='GraphType'>
    <option value="Histogram" selected>Histogram</option>
    <option value=""></option>
    <option value=""></option>
     </select>

     <ShowGraphType/>
        </div>
    )
}
export default ShowGraphType