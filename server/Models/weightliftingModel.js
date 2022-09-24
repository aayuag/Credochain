const mongoose=require("mongoose")
const weightliftingSchema=new mongoose.Schema({
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
const weightliftingModel=mongoose.model("weightlifting",weightliftingSchema)
module.exports=weightliftingModel