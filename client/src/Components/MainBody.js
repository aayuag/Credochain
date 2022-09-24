import React, { useEffect, useState } from 'react'
import './style.css'

const MainBody = () => {
    let token =localStorage.getItem("authorization")
    const [userdetails,setUserdetails]=useState({})
    const [aerobicscount, setAerobicscount] = useState(0)
    const [cardiocount, setCardiocount] = useState(0)
    const [weightliftingcount, setWeightliftingcount] = useState(0)
    const [showaerobics, setShowaerobics] = useState(true)
    const [showcardio, setShowcardio] = useState(true)
    const [showweight, setShowweight] = useState(true)
    const [trainers, setTrainers] = useState([])

    const [aerobicsvalue,setaerobicsvalue]=useState("")
    const [cardiovalue,setcardiovalue]=useState("")
    const [weightvalue,setweightvalue]=useState("")
    

    useEffect( () => {
        fetch("https://credogym-backend.herokuapp.com/user/details", {
            headers: {
              authorization: token,
            },
            }).then((res) => res.json())
            .then((data) => {
              setUserdetails(data);
              if(data.toshow==="false" || data.toshow===false){
                // console.log(data.toshow)
                setShowcardio(false)
                setShowaerobics(false)
                setShowweight(false)
              }
              
          }).catch((err)=>{
            console.log(err)
          })


         fetch("https://credogym-backend.herokuapp.com/course/cardiosize", {
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.length)
                setCardiocount(data.length);
                if (data.length >= 30) {
                    setShowcardio(false)
                }
            })
        fetch("https://credogym-backend.herokuapp.com/course/aerobicssize", {
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.length)
                setAerobicscount(data.length);
                if (data.length >= 30) {
                    setShowaerobics(false)
                }
            })
         fetch("https://credogym-backend.herokuapp.com/user/trainers", {
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setTrainers(data)

            })
         fetch("https://credogym-backend.herokuapp.com/course/weightliftingsize", {
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.length)
                setWeightliftingcount(data.length);
                if (data.length >= 30) {
                    setShowweight(false)
                }
        })
    },[token])
    
    
    const handleaerobicsselect=(e)=>{
        setaerobicsvalue(e.target.value)
        
    }

    const handleweightliftingselect=(e)=>{
        setweightvalue(e.target.value)
        
    }

    const handlecardioselect=(e)=>{
        setcardiovalue(e.target.value)
    }
    
    const handleaerobicsbook=()=>{
        fetch("https://credogym-backend.herokuapp.com/course/aerobicsbookslot", {
        method: "post",
        body: JSON.stringify({
           username:userdetails.username,
           trainer:aerobicsvalue
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        window.location.reload()
    }).catch((err) => {
        console.log(err)
    })
    }

    const handlecardiobook=()=>{
        fetch("https://credogym-backend.herokuapp.com/course/cardiobookslot", {
        method: "post",
        body: JSON.stringify({
           username:userdetails.username,
           trainer:cardiovalue
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        window.location.reload()
    }).catch((err) => {
        console.log(err)
    })
    }

    const handleweightbook=()=>{
        fetch("https://credogym-backend.herokuapp.com/course/weightliftingbookslot", {
        method: "post",
        body: JSON.stringify({
           username:userdetails.username,
           trainer:weightvalue
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        window.location.reload()
    }).catch((err) => {
        console.log(err)
    })
    }


    return (
        <>
            <div>
                <div className='card'>
                    <div className='card-img-div'>
                        <img src='./images/aerobics.webp' className='card-img' alt='gym-img'></img>
                    </div>
                    <div className='card-heading-div'>
                        <h1>Aerobics</h1>
                        <h3 className='card-h3'>12 - 2 pm</h3>
                    </div>
                    <div className='card-heading-div-slots'>
                        <p><span className='count-no'>{aerobicscount}</span> Booked Slots</p>
                        <p><span className='count-no'>{30 - aerobicscount}</span> Remaining Slots</p>

                    </div>

                    <div className='card-heading-div-slots'>
                        {
                            showaerobics ? (<><h3 className='card-h3'>Select Your Trainer</h3>
                                <select onClick={(e)=>handleaerobicsselect(e)} className='trainer-select'>
                                <option value="">--Please choose an option--</option>
                                    {trainers.map((trainer, key) => {
                                        return (
                                            <>
                                                <option value={trainer.name} key={key}>{trainer.name}</option>
                                            </>
                                        )
                                    })}
                                </select>
                                <br></br>
                                <button className='frontpage-button card-button' onClick={handleaerobicsbook}>Book Slot</button>

                            </>) : ("")
                        }
                    </div>

                </div>

                <div className='card'>
                    <div className='card-img-div'>
                        <img src='./images/cardio.jpg' className='card-img' alt='gym-img'></img>
                    </div>
                    <div className='card-heading-div'>
                        <h1>Cardio</h1>
                        <h3 className='card-h3'>2 - 4 pm</h3>
                    </div>
                    <div className='card-heading-div-slots'>
                        <p><span className='count-no'>{cardiocount}</span> Booked Slots</p>
                        <p><span className='count-no'>{30 - cardiocount}</span> Remaining Slots</p>

                    </div>
                    <div className='card-heading-div-slots'>
                        {
                            showcardio ? (<><h3 className='card-h3'>Select Your Trainer</h3>
                                <select onClick={(e)=>handlecardioselect(e)} className='trainer-select'>
                                <option value="">--Please choose an option--</option>
                                    {trainers.map((trainer, key) => {
                                        return (
                                            <>
                                                <option value={trainer.name} key={key}>{trainer.name}</option>
                                            </>
                                        )
                                    })}
                                </select>
                                <br></br>
                                <button className='frontpage-button card-button' onClick={handlecardiobook}>Book Slot</button>

                            </>) : ("")
                        }
                    </div>

                </div>
                <div className='card'>
                    <div className='card-img-div'>
                        <img src='./images/weightlifting.webp' className='card-img' alt='gym-img'></img>
                    </div>
                    <div className='card-heading-div'>
                        <h1>Weight lifting</h1>
                        <h3 className='card-h3'>4 - 6 pm</h3>
                    </div>
                    <div className='card-heading-div-slots'>
                        <p><span className='count-no'>{weightliftingcount}</span> Booked Slots</p>
                        <p><span className='count-no'>{30 - weightliftingcount}</span> Remaining Slots</p>

                    </div>
                    <div className='card-heading-div-slots'>
                        {
                            showweight ? (<><h3 className='card-h3'>Select Your Trainer</h3>
                                <select onClick={(e)=>handleweightliftingselect(e)} className='trainer-select'>
                                <option value="">--Please choose an option--</option>
                                    {trainers.map((trainer, key) => {
                                        return (
                                            <>
                                                <option value={trainer.name} key={key}>{trainer.name}</option>
                                            </>
                                        )
                                    })}
                                </select>
                                <br></br>
                                <button className='frontpage-button card-button' onClick={handleweightbook}>Book Slot</button>

                            </>) : ("")
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default MainBody