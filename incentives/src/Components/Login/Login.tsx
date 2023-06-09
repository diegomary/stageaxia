//import * as React from "react";
//import classes from './Login.module.scss';
import { useState, useEffect, useRef } from "react";

function Login() {

  const options = ['pippo', 'pluto', 'paperino']
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const changeShelly = (event: any) => {
    event.preventDefault();
  }

  const Dropdown = () => {

    return (
      <select onChange={e => setSelectedOption(e.target.value)}>
        {options.map((o: any) => (<option key={o}>{o}</option>))}
      </select>
    );
  };


  useEffect(() => { });


  return (
    <div>
      {Dropdown()}
      {selectedOption}
    </div>
  );
}

export default Login;
