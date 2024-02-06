import {PORT,MONGOURL} from './config.js'
import express from 'express'
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoute.js'
import cors from 'cors'
const app = express();


//middleware for parsing
app.use(express.json())

app.use(cors())

// book route
app.use('/book',bookRoute)


//mongodb connection
mongoose.connect(MONGOURL).then(()=>{
    
    app.listen(PORT,()=>{
        console.log(`Listening on Port ${PORT}`);
    })
    console.log('DB connected');
}).catch((err)=>{console.log(err)});


app.get('/',(req,res)=>{
       console.log(req);
       return res.status(452).send('Welcome to Book Store')
})