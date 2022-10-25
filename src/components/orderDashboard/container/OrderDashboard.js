import React from "react";
import BarGraph from "../component/BarGraph";
import ShowDate from "../component/ShowDate";
import ShowGraphType from "../component/ShowGraphType";
import Header from "../component/Header";
import OrderRevenue from "../component/OrderRevenue";
import PendingOrderProccess from "../component/PendingOrderProccess";
import ShowIcon from "../component/ShowIcon";
export default function OrderDashboard() {
  
  
  return (
    <div className="col-12">
      <Header/>
      <h2>Pending Orders</h2>
    <div className="row">
      <div className="col-12 col-lg-6 " >
        <ShowIcon/>
         
        <div style={{width:"100%",height:"auto",overflow:"scroll"}}>
         <BarGraph /> 
         </div>
      </div>

      <div className="col-12 col-lg-6 text-dark">
        
        <ShowDate/>
        <OrderRevenue/>
        <div className="row">
          <div className="col-12 col-lg-6 bg-light mb-auto">
          <PendingOrderProccess heading="Inhouse Proccessing" subH1="Orders" subH2="episodes"
          subH3="Revenue On Hold" data1="10" data2="10" data3="$1000"/>

          <PendingOrderProccess heading="To Be Sent" subH1="Orders" subH2="episodes"
          subH3="Revenue On Hold" data1="20" data2="20" data3="$1000"/>

          </div>
          <div className="col-12 col-lg-6 bg-light mb-auto">
          <PendingOrderProccess heading="Pending Signatures" subH1="Orders" subH2="episodes"
          subH3="Revenue On Hold" data1="15" data2="15" data3="$1000"/>

          <PendingOrderProccess heading="Received Orders" subH1="Orders" subH2="episodes"
          subH3="Expected Revenue" data1="15" data2="15" data3="$1000"/>

          </div>
        </div>
      
      </div>
    </div>
    </div>
  );
}
