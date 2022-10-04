//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/counter.jsx";

//render your react application
let seg = 0;
let dseg = 0;
let cseg = 0;
let mseg = 0;
let nseg = 0;
let pseg = 0;

setInterval(() => {
  seg++;
  if(seg > 9){
    seg = 0;
    dseg++;
  }
  if(dseg > 9){
    dseg = 0;
    cseg++;
  }
  if(cseg > 9){
    cseg = 0;
    mseg++;
  }
  if(mseg > 9){
    mseg=0;
    nseg++;
  }
  if(nseg > 9){
    nseg = 0;
    pseg++;
  }
  ReactDOM.render(
    <SecondsCounter segundos={seg} dsegundos={dseg} csegundos={cseg} msegundos={mseg} nsegundos={nseg} psegundos={pseg}/>,
    document.querySelector("#app")
  );
}, 1000);





