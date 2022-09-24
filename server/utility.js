const trainerModel=require('./Models/trainerModel')
const bcrypt = require("bcryptjs");
const joinerModel = require('./Models/joinerModel');
const checkExistingUser = async (username)=> {
    let existingUser = false;
    await trainerModel.find({username: username.toLowerCase()}).then(async(userData)=> {
        if(userData.length) {
            existingUser = true;
        }else{
            await joinerModel.find({username: username.toLowerCase()}).then((user)=>{
                if(user.length){
                    existingUser=true
                }
            })
        }
    });
    return existingUser;
}

const generatePasswordHash = (password) => {
    const salt = 10;
    return new Promise((resolve, reject)=> {
         bcrypt.genSalt(salt).then((hashSalt)=> {
            bcrypt.hash(password, hashSalt).then((passwordHash)=> {
                resolve(passwordHash);
            })
        })
    });
}
module.exports = {checkExistingUser, generatePasswordHash};