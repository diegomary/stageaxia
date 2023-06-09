import * as React from "react";
import './Header.scss';
import { Outlet } from "react-router-dom";
import Topheader from "./Topheader/Topheader";
import Bottomheader from "./Bottomheader/Bottomheader";
function Header() {

  return (
    <div>
      <Topheader title={'navigate'} />
      <Outlet />
      <Bottomheader />
    </div>
  );
}

export default Header;
