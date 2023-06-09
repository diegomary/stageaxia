import * as React from "react";
import classes from './Topheader.module.scss';
import { useNavigate } from "react-router-dom";

function Topheader({title} :any) {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.header_layout}>
        <div>
          <button onClick={() => { navigate("/"); }}>Home</button>
        </div>
        <div>
          <button onClick={() => { navigate("/listExample"); }}>ListExample</button>
        </div>
        <div>
          <button onClick={() => { navigate("/incentives"); }}>Incentives</button>
        </div>
        <div>
          <button onClick={() => { navigate("/login"); }}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Topheader;
