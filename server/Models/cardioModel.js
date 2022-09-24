const mongoose=require("mongoose")
const cardioSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    trainer:{
        type:String,
        required:true
    }
})
const cardioModel=mongoose.model("cardio",cardioSchema)
module.exports=cardioModel