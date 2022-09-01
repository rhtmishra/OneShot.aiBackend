const mongoose = require('mongoose')

const MONGODB_URI = "mongodb://localhost:27017/collegestudentdb"

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{ 
    console.log("Connected to the database.")
})
.catch((err)=> console.log("Error in connecting to database", err))



mongoose.connection.on('connected', ()=>{
    console.log('Mongoose connected to db.')
})


mongoose.connection.on('error', (err)=>{
    console.log(err.message)
})


mongoose.connection.on('disconnected', ()=>{
    console.log('Mongoose connection is disconnected.')
})


process.on('SIGINT', async ()=>{
    await mongoose.connection.close()
    process.exit(0)
})
