require('dotenv').config();


const express = require('express');
const app =express();
const mongoose =require('mongoose');

mongoose.connect(   process.env.DB_URL, {useNewUrlParser: true});

const db= mongoose.connection

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to db succesfully'));

app.use(express.json());
const coll = db.collection("businfos");

// const docs1 =[
//     {
//         "fromName": "Mysore",
//         "toName": "Banglore",
//         "bus1": {
//           "number": "Ka01kj324",
//           "time": "5am"
//         },
//         "bus2": {
//           "number": "Ka01kj3444",
//           "time": "11am"
//         },
//         "bus3": {
//           "number": "Ka01kj31124",
//           "time": "7pm"
//         },
//         "bus4": {
//           "number": "Ka01kj32994",
//           "time": "8pm"
//         }
//       }
// ]
// const docs2 =[
//     {
//         "fromName": "Chennai",
//         "toName": "Banglore",
//         "bus1": {
//           "number": "Ka01kj324",
//           "time": "5am"
//         },
//         "bus2": {
//           "number": "Ka01kj3444",
//           "time": "11am"
//         },
//         "bus3": {
//           "number": "Ka01kj31124",
//           "time": "7pm"
//         },
//         "bus4": {
//           "number": "Ka01kj32994",
//           "time": "8pm"
//         }
//       }
// ]
// const docs3 =[
//     {
//         "fromName": "Mysore",
//         "toName": "Shimoga",
//         "bus1": {
//           "number": "Ka01kj324",
//           "time": "5am"
//         },
//         "bus2": {
//           "number": "Ka01kj3444",
//           "time": "11am"
//         },
//         "bus3": {
//           "number": "Ka01kj31124",
//           "time": "7pm"
//         },
//         "bus4": {
//           "number": "Ka01kj32994",
//           "time": "8pm"
//         }
//       }
// ]
// const docs4 =[
//     {
//         "fromName": "Shimoga",
//         "toName": "Banglore",
//         "bus1": {
//           "number": "Ka01kj324",
//           "time": "5am"
//         },
//         "bus2": {
//           "number": "Ka01kj3444",
//           "time": "11am"
//         },
//         "bus3": {
//           "number": "Ka01kj31124",
//           "time": "7pm"
//         },
//         "bus4": {
//           "number": "Ka01kj32994",
//           "time": "8pm"
//         }
//       }
// ]

// const result1 = coll.insertMany(docs1);
// const result2 = coll.insertMany(docs2);
// const result3 = coll.insertMany(docs3);
// const result4 = coll.insertMany(docs4);




const busInfoRoutes = require('./routes/busInfo');

app.use('/',busInfoRoutes);


app.listen(8081,() => console.log('Server started'))