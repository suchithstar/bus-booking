import React,{useState,useEffect} from "react";
import {useNavigate,useLocation} from "react-router-dom";





function PersonalPage(){
    const [passengerName,setpassengerName]= useState();
    const [age,setage]= useState();
    const [email,setemail]= useState();
    const [busses,setBusses]=useState({});
    const location=useLocation();

    const navigate=useNavigate();
    useEffect(()=>{
       setBusses(location.state)
    },[])

    const personalPageSubmit = event => {
        event.preventDefault(); 

        console.log('personalPageSubmit done');
        console.log(email);
        navigate("confirmationpage",{state:email});

    };
console.log(busses)
    return(
      
      <>
      
      <div className='Place'>
        <h2>
          Destination Details
        </h2>
        <select className="PlaceNames">
          <option value="1">{`Bus No:${busses?.bus1?.number} time: ${busses?.bus1?.time}`}</option>
          <option value="2">{`${busses?.bus2?.number} ${busses?.bus2?.time}`}</option>
          <option value="3">{`${busses?.bus3?.number} ${busses?.bus3?.time}`}</option>
          <option value="4">{`${busses?.bus4?.number} ${busses?.bus4?.time}`}</option>

        </select>
      </div><form className='SubmitPlaces' onSubmit={personalPageSubmit}>
            <div>
            <b>Enter passenger Name     </b>
            <input
              id="passengerName"
              name="passengerName"
              type="text"
              onChange={event => setpassengerName(event.target.value)}
              value={passengerName} />
            </div>
            <div>
            <b>Enter age of passenger    </b>
            <input
              id="age"
              name="age"
              type="text"
              onChange={event => setage(event.target.value)}
              value={age} />
               </div>
               <div>
             <b>Enter your E-mail id    </b>
            
            
            <input
              id="email"
              name="email"
              type="text"
              onChange={event => setemail(event.target.value)}
              value={email} />
            </div>
          
          <button type='submit'> Submit</button>
        </form></>
    )

}
export default PersonalPage;