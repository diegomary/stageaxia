import * as React from "react";
import  { useState, useEffect } from "react";
import './Home.module.scss';
import mqtt from "precompiled-mqtt";

function Home() {  

const topics = {              
                power:"shellies/diego-meter/emeter/0/power",
                reactive_power:"shellies/diego-meter/emeter/0/reactive_power",
                voltage:"shellies/diego-meter/emeter/0/voltage",
                total:"shellies/diego-meter/emeter/0/total",
                total_returned:"shellies/diego-meter/emeter/0/total_returned",
                energy:"shellies/diego-meter/emeter/0/energy",
                returned_energy:"shellies/diego-meter/emeter/0/returned_energy",
                all_topics:"shellies/diego-meter/emeter/0/#",}
  
  const [power, setPower] = useState({topic:topics['power'],power:''});
  const [reactive_power, setReactivePower] = useState({topic:topics['reactive_power'],reactive_power:''});
  const [voltage, setVoltage] = useState({topic:topics['voltage'],voltage:''});
  const [total, setTotal] = useState({topic:topics['total'],total:''});
  const [total_returned, setTotalReturned] = useState({topic:topics['total_returned'],total_returned:''});
  const [energy, setEnergy] = useState({topic:topics['energy'],energy:''});
  const [returned_energy, setReturnedEnergy] = useState({topic:topics['returned_energy'],returned_energy:''});

  const sub_options:mqtt.IClientSubscribeOptions = {qos: 1,};
    const options:mqtt.IClientOptions = {
      hostname:"vpp4i.nevergoback.cloud",
      protocol:'wss',
      username:'',
      password:'',
      port:9001,
      clean:true,
      connectTimeout:4000,
      clientId:Math.random().toString(36).slice(2, 12),  // Generate random ID for client
      protocolVersion: 5,        
    }

  useEffect(() => {
    
    const client = mqtt.connect(options);
    client.on('connect', (connack:any)=> {
      client.subscribe(topics["all_topics"],sub_options,(err:Error)=>{});
    })
    client.on('close', ()=> {})
    client.on("message",  (topic:any, message:any) => { 
      if(topic === topics["power"]) setPower({topic:topic,power:message.toString()});
      if(topic === topics["reactive_power"]) setReactivePower({topic:topic,reactive_power:message.toString()});
      if(topic === topics["voltage"]) setVoltage({topic:topic,voltage:message.toString()}); 
      if(topic === topics["total"]) setTotal({topic:topic,total:message.toString()});      
      if(topic === topics["total_returned"]) setTotalReturned({topic:topic,total_returned:message.toString()});    
      if(topic === topics["energy"]) setEnergy({topic:topic,energy:message.toString()});  
      if(topic === topics["returned_energy"]) setReturnedEnergy({topic:topic,returned_energy:message.toString()});                
    });

    return () => {client.end()};  // Disconnect when the component is removed from the DOM  

  },[]); // this use Effect will run once at the beginning

  return (
    <div>
     <p>{power.topic.replace('shellies/diego-meter/emeter/0/','')}</p>
     <p>{power.power}</p>
     <p>{reactive_power.topic.replace('shellies/diego-meter/emeter/0/','')}</p>
     <p>{reactive_power.reactive_power}</p>
     <p>{total.topic.replace('shellies/diego-meter/emeter/0/','')}</p>
     <p>{total.total}</p>
     <p>{total_returned.topic.replace('shellies/diego-meter/emeter/0/','')}</p>
     <p>{total_returned.total_returned}</p>
     <p>{voltage.topic.replace('shellies/diego-meter/emeter/0/','')}</p>
     <p>{voltage.voltage}</p>
     <p>{energy.topic.replace('shellies/diego-meter/emeter/0/','')}</p>
     <p>{energy.energy}</p>
     <p>{returned_energy.topic.replace('shellies/diego-meter/emeter/0/','')}</p>
     <p>{returned_energy.returned_energy}</p>
    </div>
  );
}

export default Home;