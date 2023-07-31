const express = require('express')
const userRoutes=require('./routes/userRoutes')
const adminRoutes=require('./routes/adminRoutes')
const cookiParser =require('cookie-parser')
const connection=require('./config/database')




require("dotenv").config();
const errorMiddleware=require('./middlewares/errorMiddleware')

const port=process.env.PORT|| 5000;

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true }))
app.use(cookiParser())

app.use('/api/users',userRoutes); 

app.use('/api/admin',adminRoutes);

app.get('/',(req,res)=>res.send('server is ready'))

app.use(errorMiddleware.errorHandler)
app.use(errorMiddleware.notFound)



app.listen(port,()=>console.log(`server started at  port ${port}`))