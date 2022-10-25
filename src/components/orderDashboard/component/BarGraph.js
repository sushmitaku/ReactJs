import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
const BarGraph = () => {
  const [id, setId] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("https://5b9f8640f5036f00142e4a2c.mockapi.io/v1/users-count").then(
      (result) => {
        result.json().then((resp) => {
          console.warn("Response data", resp);
          let idArray = [];
          let nameArray = [];
          Object.keys(resp).map((key) => {
            idArray.push(key);
            nameArray.push(resp[key].CLINICIAN_NAME);
          });
          //   var nameArray = [...resp].map((item,i)=>{
          //     console.warn("Response idArray1",item)
          //     idArray.push(i);
          //     return item.counts
          //     })
          console.warn("Response idArray", idArray);
          console.warn("Response nameArray", nameArray);
          setId(idArray);
          setName(nameArray);
        });
      }
    );
  }, []);
  let totalLength = id.length;
  console.warn("total length", totalLength);

  //console.warn(CollectData)
let layoutWidth=window.innerWidth>550?700:window.innerWidth;
  return (
        <Plot
          data={[
            {
              options: {
                scales: {
                  x: { min: 0, max: totalLength, ticks: { stepSize: 1 } },
                },
              },
              orientation: "h",
              type: "bar",
              x: id,
              y: name,
            },
          ]}
          // layout={ {width: layoutWidth, height: "auto", title: 'A Fancy Plot'} }
        />

  );
};
export default BarGraph;
