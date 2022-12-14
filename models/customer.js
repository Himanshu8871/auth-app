const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customSchma = Schema({
    firstName:{
       type:String,
       maxLength:50
    },
    lastName:{
        type:String,
        maxLength:50
    },
    phoneNo:{
        type:String,
        maxLength:15
    },
    email:{
        type:String,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        minLength:6
    }
});

const Customer = mongoose.model("customers",customSchma);
module.exports = { Customer };