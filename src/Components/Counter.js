import React, { useEffect, useState } from "react";
import "./../Style/counter.css";


function Counter() {
    let count =0;
    useEffect(()=>{
      window.alert('I am clicked');
    });
    const [currentstate, updatedstate]= useState(count);
    const handleclick=()=>{
        updatedstate(currentstate+1);
    };
  return (
    <div className="main">
      <div className="counter-container">
        <h1>Counter</h1>
        <div className="button-group">
          <button onClick={handleclick}>{   currentstate}</button>
         
        </div>
      </div>
    </div>
  );
}

export default Counter;
