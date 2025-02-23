import React, { useState } from "react";
import "./../Style/counter.css";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function Counter() {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setShowAlert(true);
  };

  return (
    <div className="main">
      <div className="counter-container">
        <h1>Counter</h1>
        {showAlert && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            I am clicked.
          </Alert>
        )}
        <div className="button-group">
          <button onClick={handleClick}>{count}</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
