import React,{useState,useEffect} from "react";

import {useNavigate,useLocation} from "react-router-dom";

const  handleResponse=async (email) =>{
  console.log(" Handling Response");
  const response=await fetch(`http://localhost:8081/sendEmail?email=${email}`).then((res)=>res.json())

  return (response)
  
}

function ConfirmationPage(){
    const[yes,setyes]=useState();
    const[no,setno]=useState();
    

    const navigate=useNavigate();
    const [email,setemail]= useState({});

    const location=useLocation();
    useEffect(()=>{
      setemail(location.state)
    },[])
    const handleNo= event =>  {
      navigate('/');
    }
    const handleYes = async event => {
      console.log("handled yes");
      
      handleResponse(email)

      alert('Booked succesfully!');
      // navigate('/');
    }

    return(
        <div>
        <h4>
            Are you sure to book the Bus ?.
        </h4>
        <button onClick={ handleYes}>Yes</button>;
        <button onClick={handleNo}>No</button>;

        
     </div>
        );
}

export default ConfirmationPage;
