import './App.css';
import './PlaceList';
import BusInfo from './BusInfo';
import React,{useState} from "react";
import {useNavigate} from "react-router-dom";


const  handleResponse=async (fromPlace,toPlace) =>{
  console.log(" Handling Response");
  const response=await fetch(`http://localhost:8081/getbusses?fromPlace=${fromPlace}&toPlace=${toPlace}`).then((res)=>res.json())

  return (response)
  
}

function MainPage() {
  const [onSubmitClick,setOnSubmitClick]=useState(false)
    const [pfromPlace,fromPlace]=useState('');
    const [ptoPlace,toPlace]=useState('');

    const navigate=useNavigate();

    const handleSubmit = async event => {
      console.log('handleSubmit ran');
      event.preventDefault(); 
      if(ptoPlace!==""&&pfromPlace!==""){
  
      setOnSubmitClick(!onSubmitClick);
      
      const response=await handleResponse(pfromPlace,ptoPlace )
    navigate("personalpage",{state:response});
    return
    };
    return
  };
    
    console.log('value123456',onSubmitClick)
  return (
    <><div className="Welcome">
        <h2 className="Welcome-header">
          Welcome to Bus booking Website.
        </h2>
        <h3>
          Places
        </h3>
        <form className='SubmitPlaces' onSubmit={handleSubmit}>
        <p className='PlaceLst'>
          <b>from</b>
          <input
          id="fromPlace"
          name="fromPlace"
          type="text"
          onChange={event => fromPlace(event.target.value)}
          value={pfromPlace}
        />
          
          <b>to   </b>    
          <input
          id="toPlace"
          name="toPlace"
          type="text"
          onChange={event => toPlace(event.target.value)}
          value={ptoPlace}
        />

        </p>
          <button type='submit'> Search bus</button>
        </form>
    </div>
</>

  );
}

export default MainPage;
