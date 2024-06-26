const mongoose = require('mongoose')
const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('database has connected successfully');
    }
    catch(error){
        console.log(`ERROR in mongoDB ${error}`);
    }
};
module.exports=connectDB;