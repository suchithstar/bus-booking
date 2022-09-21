const mongoose = require('mongoose')

const busInfoSchema =new mongoose.Schema({
    fromName:{
        type:[String]

    },
    toName:{
        type:[String]

    },
    bus1: {
            number:{type:String}, 
            time:{type:String}
    },
    bus2:{
        number:{type:String}, 
        time:{type:String}
    },
    bus3: {
            number:{type:String}, 
            time:{type:String}
    },
    bus4: {
        number:{type:String}, 
        time:{type:String}
    }
})

module.exports=mongoose.model('busInfo',busInfoSchema);