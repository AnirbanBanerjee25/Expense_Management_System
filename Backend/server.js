const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectDb=require("./config/connectDb");
//CONFIG DOT ENV FILE
dotenv.config();

connectDb();
//rest object
const app=express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//route
app.use('/api/v1/users',require('./routes/userRoute'))

app.use('/api/v1/transections',require('./routes/transactionRoutes'));
//port
const PORT=8081 || process.env.PORT

//listening
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});

