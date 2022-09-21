const { json, response } = require('express');
const express =require('express');
const router = express.Router()
const BusInfo= require('../models/busInfomodel')
var jp = require('jsonpath');
const sendmail = require('sendmail')();


var sendbac=null;
function checkquery ( item,fromPlace,toPlace){
    console.log(fromPlace,toPlace)
    if((jp.query( item, '$.fromName')==fromPlace
    && (jp.query( item, '$.toName')==toPlace)) 
        ||(jp.query( item, '$.fromName')==fromPlace
    &&(jp.query( item, '$.toName')==toPlace))) {
        console.log(item);
        sendbac=item
    }
}

module.exports= router

router.all('/', async function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    try{
        const busInformations= await BusInfo.find();
        const eert=busInformations.forEach(checkquery);
            console.log(sendbac)
        res.json(sendbac);
            

        
   }catch(err){
    res.status(500).json({message:err.message})
    }
}
   );


router.get('/getbusses',async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    const{fromPlace,toPlace}=req.query
    console.log(fromPlace,toPlace)

    try{
        const busInformations= await BusInfo.find();
        const eert=busInformations.forEach((item)=>checkquery(item,fromPlace,toPlace));
            // console.log(sendbac)
        res.json(sendbac);
            

        
   }catch(err){
    res.status(500).json({message:err.message})
    }

})

router.get('/sendEmail',async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    const{email}=req.query

    try{

        sendmail({
            from: 'suchithsuchi.sbs@gmail.com',
            to: email,
            subject: 'Bus booking',
            html: 'Bus has been booked succesfully ',
          }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });

        res.json("{success}");
            

        
   }catch(err){
    res.status(500).json({message:err.message})
    }

})