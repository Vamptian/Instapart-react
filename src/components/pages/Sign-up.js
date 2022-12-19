import '../../css/components/pages/sign-up.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'

import React from 'react'
const SignUp = (props) => {
    const [formValues, setFormValues] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const navigator = useNavigate()
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',


    })

    const [message, setMessage] = useState('')


    const validate = (values) => {

        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!"
        }
        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email"
        }
        if (!values.password) {
            errors.password = "Password is required!"
        } else if (values.password.length < 5) {
            errors.password = "Password must be longer then 5 characters"
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = "Phone Number is required!"
        } else if (values.phoneNumber.length < 10) {
            errors.phoneNumber = "Must be a full phonenumber"
        }
        return errors
    }


    const changeHandler = (event) => {

        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
        setUser({ ...formValues, [name]: value })
    }

    const submitHandler = (event) => {

        setFormErrors(validate(formValues));
        setIsSubmit(true)

        


    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
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

    }, [formErrors])

    return (



        <div className='flex-row wall-background fill  center '>
            <div className='flex-col  half-width'>
                <div className='flex-row center'>
                    <h1 className='welcome-sign-up'>Welcome to instapart</h1>
                </div>
                <div className='flex-row center'>
                    <h1>Sign up</h1>
                </div>
            </div>
            <div className='flex-col half-width form background-teal'>

                <div className='flex-row'>
                    <div><h5>{message}</h5></div>
                </div>
                <label>USER NAME</label>
                <input type='text' name="username" value={formValues.username} onChange={changeHandler} />
                <p className='errorMessage'>{formErrors.username}</p>

                <label>EMAIL</label>
                <input type='text' name="email" value={formValues.email} onChange={changeHandler} />
                <p className='errorMessage'>{formErrors.email}</p>

                <label>Phonenumber</label>
                <input className='' type='number' name="phoneNumber" value={formValues.phoneNumber} onChange={changeHandler} />
                <p className='errorMessage'>{formErrors.phoneNumber}</p>

                <label>PASSWORD</label>
                <input className='' type='password' name="password" value={formValues.password} onChange={changeHandler} />
                <p className='errorMessage'>{formErrors.password}</p>

                <div className='space-out center'>
                    <button className='input-button' onClick={submitHandler}>SUBMIT</button>
                </div>

            </div>

        </div>





    )




}
export default SignUp