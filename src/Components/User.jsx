import React from "react";

function User(props) {
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <p>I am a {props.work}</p>
    </div>
  );
}

export default User;
