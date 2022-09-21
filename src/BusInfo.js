import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
function BusInfo (){
    return (

      

        <div className='Place'>
            <h2>
                Destination Details
            </h2>
            <select className="PlaceNames">
                <option value="1">Bus no: ka09123 time: 12pm</option>
                <option value="2">Bus no: ka0567 time: 1pm</option>
                <option value="3">Bus no: ka34567 time: 2pm</option>
                <option value="4">Bus no: ka091789 time: 8am</option>

          </select>
        </div>
      );
    };
    export default BusInfo;