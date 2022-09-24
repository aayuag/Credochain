const mongoose=require("mongoose")
const trainerSchema=new mongoose.Schema({
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
        type:"String",
        required:true
    }
})
const trainerModel=mongoose.model("trainer",trainerSchema)
module.exports=trainerModel