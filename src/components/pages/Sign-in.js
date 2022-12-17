import '../../css/components/pages/sign-up.css'
import { useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'


const SignIn = (props) =>{


    const navigator = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [isAdmin, setIsAdmin] = useState(false)
    const [message, setMessage] = useState('')

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempUser = { ...user }
        tempUser[name] = value
        setUser(tempUser)
    }

    const submitHandler = () => {

        if (user.email != '' && user.password != '') {

            axios.post('http://localhost:8080/signIn', user)
                .then((response) => {
                    console.log(response.data)
                    localStorage.setItem("email", response.data.email)
                    navigator('/')
                    props.setUser(response.data)
                }).catch((e) => {
                    console.log(e)
                    setMessage(e.response.data)
                })

        } 
            else{
                setMessage('user info canot be blank')
            }
    }

    const toggleAdmin = () => {

        if (isAdmin) {
            setIsAdmin(false)
        } else {
            setIsAdmin(true)
        }

    }


    return(

        <div className='flex-col background-beige fill center'>
        <div className='flex-col form background-teal'>
            <div className='flex-col center'>
            <div className='flex-row'>
                <h1>Sign In</h1>
            </div>
            <div className='flex-row'>
            <div><h5>{message}</h5></div>
            </div>
            
         
            <label>EMAIL</label>
            <input className="input" type='text' name="email" value={user.email} onChange={changeHandler} />

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
export default SignIn