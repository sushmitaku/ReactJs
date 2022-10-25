import React from "react";
const PendingOrderProccess=(props)=>
{
    return(
        <div className="bg-light py-2">
                <h4>{props.heading}</h4>
        <div className="row">
        
            <div className="col-12 col-lg-4">
            <small>{props.subH1}</small>
            <div>{props.data1}</div>
            </div>
            <div className="col-12 col-lg-4">
            <small> {props.subH2}</small>
            <div>{props.data2}</div>
            </div>
            <div className="col-12 col-lg-4">
            <small>{props.subH3}</small>
            <div>{props.data3}</div>
            </div>
            </div>

            <div className="text-center"><a href="#" >view details</a></div>
             </div>
        
    )
}
export default PendingOrderProccess