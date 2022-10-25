import React from "react";
import moment from "moment/moment";
const ShowDate=()=>
{
    // let today = new Date()
    // const month=today.toLocaleString('en-US',{month:'long'})
    // const year=today.getFullYear()
    // const day=today.toLocaleString('en-US',{day:'2-digit'})
    
    console.warn("check ",moment().format(' Do MMMM  YYYY'))

    return(
        <div className="row">
            <div className="col-12 col-lg-6">
                Start Date: <input type="date" id="myDate" defaultValue={moment().format(' Do MMMM  YYYY')}/></div>
            <div className="col-12 col-lg-6 ">
                End Date: <input type="date" id="myDate" defaultValue={moment().format(' Do MMMM  YYYY')}/>

            
            </div>


        </div>
    )
}
export default ShowDate;