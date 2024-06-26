const express = require('express')
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRoute = require('./Routes/authenticationRoute.js')
const riskRoute = require('./Routes/riskRoute.js');



app.use(cors());
app.use(express.json());
dotenv.config();

app.use('/api/v1/auth',authRoute);
app.use('/api/v1/risk',riskRoute)
app.listen(process.env.PORT,() => {
    console.log(`Server started on port no ${process.env.PORT}`)
    connectDB();
})