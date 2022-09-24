const express = require("express")
const { checkExistingUser, generatePasswordHash } = require("../utility");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const trainerModel = require("../Models/trainerModel");
const joinerModel = require("../Models/joinerModel");

const router = express.Router()

router.post("/signup", async (req, res) => {
    // console.log(req.body)
    if (await checkExistingUser(req.body.username)) {
        res.status(400).send("Username exist. Please try with different username");
    } else {
        // console.log("aayu")
        if (req.body.istrainer.toLowerCase() === "trainer") {
            generatePasswordHash(req.body.password).then((passwordHash) => {
                trainerModel.create({
                    name: req.body.name,
                    mobile: req.body.mobile,
                    age: req.body.age,
                    address: req.body.address,
                    username: req.body.username.toLowerCase(),
                    password: passwordHash,
                    toshow:false
                }).then(() => {
                    res.status(200).send(`${req.body.username} added successfully`);
                }).catch((err) => {
                    res.status(400).send(err.message)
                })
            });
        } else if (req.body.istrainer.toLowerCase() === "joiner") {
            generatePasswordHash(req.body.password).then((passwordHash) => {
                joinerModel.create({
                    name: req.body.name,
                    mobile: req.body.mobile,
                    age: req.body.age,
                    address: req.body.address,
                    username: req.body.username.toLowerCase(),
                    password: passwordHash,
                    toshow: true
                    
                }).then(() => {
                    res.status(200).send(`${req.body.username} added successfully`);
                }).catch((err) => {
                    res.status(400).send(err.message)
                })
            });
        }
    }
});

router.post("/login", async (req, res) => {
    // console.log(req.body)
    await trainerModel.find({ username: req.body.username.toLowerCase() }).then((userData) => {
        if (userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val) => {
                if (val) {
                    const authToken = jwt.sign(userData[0].username, process.env.SECRET_KEY);
                    res.status(200).send({ authToken });
                } else {
                    res.status(400).send("Invalid Password");
                }
            })
        } else {
            joinerModel.find({ username: req.body.username.toLowerCase() }).then((user) => {
                if (user.length) {
                    bcrypt.compare(req.body.password, user[0].password).then((val) => {
                        if (val) {
                            const authToken = jwt.sign(user[0].username, process.env.SECRET_KEY);
                            res.status(200).send({ authToken });
                        } else {
                            res.status(400).send("Invalid Password");
                        }
                    })
                } else {
                    res.status(400).send("No such user")
                }
            })
        }
    }).catch((err) => {
        res.status(400).send(err)
    })
});

router.get("/details", async (req, res) => {
    const username = jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
    // console.log(username)
    await trainerModel.find({ username: username }).then(async (data) => {
        if (data.length) {
            res.status(200).send(data[0])
        } else {
            joinerModel.find({ username: username }).then((userdata) => {
                if (userdata.length) {
                    res.status(200).send(userdata[0])
                } else {
                    res.status(400).send("No user found")
                }
            })
        }
    }).catch((err) => {
        res.status(400).send(err)
    })
})

router.get("/trainers", async (req, res) => {
    await trainerModel.find().then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

router.post("/logout", (req, res) => {
    res.status(200).send("logout works");
});


module.exports = router