import { useEffect, useState } from "react";
import classes from './Login.module.scss';
import Formentera from '../../Images/Formentera.jpg';

function Login() {
  
    const options = ['Formentera_one',
    'Formentera_two',
    'Formentera_3',
    'Formentera_4',
    'Formentera_5',
    'Formentera_6',
    'Formentera_7',
    'Formentera_8',
    'Formentera_9',
    'Formentera_10',
    'Formentera_11',
    'Formentera_12',
    'Formentera_13',
    'Formentera_14',
    'Formentera_15',
    'Formentera_16',
    'Formentera_17',
    'Formentera_18',
    'Formentera_19',
    'Formentera_20',
    'Formentera_21',
    'Formentera_22',
    'Formentera_23',
    'Formentera_24',
    'Formentera_25',
    'Formentera_tri_1',
    'Formentera_tri_2',
    'Formentera_tri_3',
    'Formentera_tri_4',
    'Formentera_tri_5',];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const [pwd, setPwd] = useState("");

    useEffect(() => {
      return () => { };  // cleanup
    }, []);

    function handleClick()
    {
       alert("Selezionato shelly: " + selectedOption + " con password: " +pwd);
    }
  
    return (
      <>
      <div>
        <img style={{objectFit: "cover", width: "100%", height: "80%", opacity: "0.6"}}  src={Formentera}/>
      </div>
      <div style={{position: "absolute", top: "50%", left: "45%", width: "20%"}}>
            <select style={{width: "100%"}} className={classes.loginSelect} onChange={e => setSelectedOption(e.target.value)}>
              {options.map((o: any) => (<option key={o}>{o}</option>))}
            </select><br/>
            <input style={{width: "97%"}} className={classes.loginPwd} type="password" placeholder="password" onChange={p => setPwd(p.target.value)} /><br/>
            <div style={{width: "40%", margin: "0 auto"}}>
              <button style={{width: "100%"}} className={classes.loginButton} onClick={handleClick}>Check</button>
            </div>
      </div>
      </>
    );
  }
  
  export default Login;