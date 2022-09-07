const express=require('express');
const app=express();
const dotenv = require('dotenv');
const cors=require('cors');

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

app.use('https://chat-app-it-b-c-2.herokuapp.com/api/messenger',authRouter);
app.use('https://chat-app-it-b-c-2.herokuapp.com/api/messenger',messengerRoute);

app.use(cors({
  origin : [ 'https://chat-application22222.netlify.app' , 'https://chat-app-it-b-c-2.herokuapp.com' ],
  methods:["GET" , "POST" , "PUT", "DELETE"],
  credentials: true
}));

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send('this is from backend server');
})

databaseConnect();

app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}`);
})