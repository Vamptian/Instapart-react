import '../../css/components/pages/sign-up.css'
import { useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'

import React from 'react'
const SignUp = (props) =>{
 
    const navigator = useNavigate()
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: ''
        
    })

    const [message, setMessage] = useState('')

    

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempUser = {...user}
        tempUser[name] = value
        setUser(tempUser)
    }

    const submitHandler = () => {

        if(user.username !== '' && user.email !== '' && user.password !== '' && user.phoneNumber !== ''){
        axios.post('http://localhost:8080/signUp', user)
        .then((response) => {
            console.log(response.data)
            navigator('/Sign-In')
        }).catch((e) => {
            console.log(e)
            setMessage(e.response.data)
            console.log(message)
        })
        }
        else{
            setMessage('user info cannot be blank')
        }
    }


  return (



    <div className='flex-col background-beige center'>
        <div className='flex-col form background-teal'>
            <div className='flex-col center'>
            <div className='flex-row'>
                <h1>Sign up</h1>
            </div>
            <div className='flex-row'>
            <div><h5>{message}</h5></div>
            </div>
            
            <label>USER NAME</label>
             <input  type='text' name="username" value={user.username} onChange={changeHandler} />
            
            
            <label>EMAIL</label>
            <input type='text' name="email" value={user.email} onChange={changeHandler} />
            
            
            <label>Phonenumber</label>
            <input className='' type='number' name="phoneNumber" value={user.phoneNumber} onChange={changeHandler} /> 
            
            
            <label>PASSWORD</label>
            <input className='' type='password' name="password" value={user.password} onChange={changeHandler} /> 
            
            <div className='space-out center'>
                <button className='input-button' onClick={submitHandler}>SUBMIT</button>
            </div>
    </div>

        </div>

    </div>



  )




}
export default SignUp