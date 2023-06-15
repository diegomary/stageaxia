import * as React from "react";
import { useState, createContext, useEffect } from "react";
import classes from './Preservation.module.scss';
import Child from './Child/Child';

export type UserType = {
  user: string
  setUser:(user: string) => void
}
export const UserContext = createContext<UserType>({user:'Diego.B',setUser: () =>{}});
function Preservation() {
  const [user, setUser] = useState("Diego B");


  useEffect(() => {  

   console.log('effect called')
   localStorage.setItem('user',user)

    return () => { }
},[user]);   


 
  return (
    <>
      <UserContext.Provider value={{user,setUser}}>
        <h1>{`Hello ${user}!`}</h1>
        <button onClick={() => {setUser('TOPOLINO')}}>Change User from parent</button>
        <Child />
      </UserContext.Provider>
    </>
  );
}

export default Preservation;