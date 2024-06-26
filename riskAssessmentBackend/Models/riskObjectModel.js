const mongoose = require('mongoose');

const riskObjectSchema = new mongoose.Schema({
    riskScenario:{
        type:String,
        required:true,
    },
    riskDescription:{
        type:String,
        required:true,
    },
    riskField1:{
        type:String,
    },
    riskField2:{
        type:String
    },
    riskKeyValueObj:{
        type:Object,
    }
}, {timestamps:true}
)

const riskObjectModel = mongoose.model('riskObjects',riskObjectSchema)
module.exports=riskObjectModel;