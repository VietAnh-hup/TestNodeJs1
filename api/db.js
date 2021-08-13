const mongoose = require('mongoose')
require('dotenv').config();

async function Connect(){
    try{
        await mongoose.connect('mongodb://localhost/listWork', {
                                useNewUrlParser: true,
                                useUnifiedTopology: true,
                                useFindAndModify: false,
                                useCreateIndex: true
    });
        console.log("Connect sucessfully")
    }
    catch
    {
        console.log("Connect eror")
    }
}

module.exports  = {Connect};