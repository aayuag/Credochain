const express = require("express")
const cardioModel=require("../Models/cardioModel")
const joinerModel=require("../Models/joinerModel")
const aerobicsModel=require("../Models/aerobicsModel")
const weightliftingModel=require("../Models/weightliftingModel")


const router = express.Router()

router.post("/cardiobookslot",(req,res)=>{
    // console.log(req.body)
    cardioModel.create({
        username:req.body.username,
        trainer:req.body.trainer
    }).then(async(data)=>{
        // console.log(data)
        await joinerModel.updateOne({username:req.body.username},{$set:{"toshow":false}}).then((user)=>{
            // console.log("aayu")
            res.status(200).send(user)
        })
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.post("/aerobicsbookslot",(req,res)=>{
    // console.log(req.body)
    aerobicsModel.create({
        username:req.body.username,
        trainer:req.body.trainer
    }).then((data)=>{
        // console.log("aayu")
        joinerModel.updateOne({username:req.body.username},{$set: {"toshow":false } }).then((user)=>{
            res.status(200).send(data)
        })
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.post("/weightliftingbookslot",(req,res)=>{
    // console.log(req.body)
    weightliftingModel.create({
        username:req.body.username,
        trainer:req.body.trainer
    }).then((data)=>{
        // console.log("aayu")
        joinerModel.updateOne({username:req.body.username},{$set: {"toshow":false } }).then((user)=>{
            res.status(200).send(data)
        })
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.get("/weightliftingsize", async (req,res) => {
    weightliftingModel.find().then((data)=>{
        res.status(200).send(data)
    })
})

router.get("/aerobicssize", async (req,res) => {
    aerobicsModel.find().then((data)=>{
        res.status(200).send(data)
    })
})

router.get("/cardiosize", async (req,res) => {
    cardioModel.find().then((data)=>{
        res.status(200).send(data)
    })
})


module.exports = router