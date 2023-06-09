import * as React from "react";
import { Outlet } from "react-router-dom";
import classes from './Incentives.module.scss';
import { useNavigate } from "react-router-dom";
import {useEffect } from "react";
function Incentives() {
 
  const navigate = useNavigate();
  useEffect(() => {
   
    navigate("/incentives/spain")
    return () => { };  
  }, [navigate]); // to avoid warning

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header_layout}>
          <div className={classes.separator}></div>
          <div>
            <button onClick={() => { navigate("/incentives/spain"); }}>Spain</button>
          </div>
          <div className={classes.separator}></div>
          <div>
            <button onClick={() => { navigate("/incentives/turkey"); }}>Turkey</button>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Incentives;