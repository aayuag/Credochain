const mongoose=require("mongoose")
const aerobicsSchema=new mongoose.Schema({
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
const aerobicsModel=mongoose.model("aerobics",aerobicsSchema)
module.exports=aerobicsModel