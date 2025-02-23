import React from "react";
import "../Style/counter.css";
import { Link } from "react-router-dom";
function Front() {
  return (
    <div className="main-header">
      <nav>
        <ul>
          <Link to={"/"}>   
          <li>
            Home
          </li>
          </Link>

          <Link to={"/counter"}>   
          <li>
          Counter
          </li>
          </Link>

          <Link to={"/about"}>   
          <li>
          About
          </li>
          </Link>
        
        </ul>
      </nav>
    </div>
  );
}

export default Front;
