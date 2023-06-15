import * as React from "react";
import { useState, createContext, useContext,useEffect } from "react";
import { UserContext } from "../Preservation";

function Child() {
    
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {  
    return () => { }
});   

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
      <button onClick={()=> setUser('ZAMPAQUADRATA')}>Change Context from Child parent</button>
      
    </>
  );
}

export default Child;