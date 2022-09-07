const express=require('express');
const app=express();
const dotenv = require('dotenv')

const databaseConnect = require('./backend/config/database')
const authRouter=require('./backend/routes/authRoute');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const messengerRoute = require('./backend/routes/messengerRoute');

dotenv.config({
     path : 'backend/config/config.env'
})

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/messenger',authRouter);
app.use('/api/messenger',messengerRoute);

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send('this is from backend server');
})

databaseConnect();

app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}`);
})