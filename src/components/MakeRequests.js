import React from 'react'
import axios from 'axios'

const random = () ={
  const [formValues, setFormValues] = useState(user)


  const navigator = useNavigate()
  const [user, setUser] = useState({
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      usernameValid: false,
      emailValid: false,
      passwordValid: false,
      phoneNumberValid: false

  })

  const [message, setMessage] = useState('')


  const passwordFormat = () => {
      if (user.password.length < 6) {
          setPassForm('badFormat')
      }
      else {

      }

  }


  const changeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      const tempUser = { ...user }
      tempUser[name] = value
      setUser(tempUser)
  }

  const submitHandler = () => {

      if (user.username !== '' && user.email !== '' && user.password !== '' && user.phoneNumber !== '') {
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
      else {
          setMessage('user info cannot be blank')
      }
  }


  return (
      <div className='flex-row background-beige  center space-down1'>
          <div className='flex-col  half-width'>
              <div className='flex-row center'>
                  <h1>Welcome to instapart</h1>
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
              <input type='text' name="username" value={user.username} onChange={changeHandler} />
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





  )
}
export default random
