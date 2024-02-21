const express = require('express');
const app = express();
const webHookRoute = require('./routes/webHook');
require('dotenv').config()
const port = 3000

app.use(express.json())


app.use('/', webHookRoute);


const start = async () =>{
    try{
        // await connectDB(process.env.url)
        app.listen(port, ()=>{
            console.log(`Server started listening on port ${port}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();