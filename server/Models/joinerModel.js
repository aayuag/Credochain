const mongoose=require("mongoose")
const joinerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    toshow:{
        type:Boolean,
        required:true
    }  
})
const joinerModel=mongoose.model("joiner",joinerSchema)
module.exports=joinerModel