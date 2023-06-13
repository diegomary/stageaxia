import * as React from "react";
import  { useState } from "react";
import './Dialog.scss';

function Child({user,change}:any) {  
  return (
    <>
      <h1>This is the child</h1>
      <p>{`Child component -> User: ${user}!`}</p>
      <button onClick={() => change()}>Change User From the Child Component</button>
    
    </>
  );
}

function Father() {
  const [user, setUser] = useState("SuperUser");
  function handleState() {
    setUser("RootUser");
 }

  return (
    <div>
      <h1>This is the father</h1>    
      <p>{`Father component -> User: ${user}!`}</p>
        <Child  user={user} change = {handleState} />
    </div>
  );
}

function Dialog() {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>Example of Dialog between a component father and a component son</h1>    
      <Father/>
    </div>
  );
}

export default Dialog;
