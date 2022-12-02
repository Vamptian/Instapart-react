
import '../../css/components/pages/user-page.css'
import { useNavigate } from "react-router"
import axios from 'axios'
import { useEffect, useState } from "react"

import MyWearhouse from '../forms/My-Wearhouse'
import MyContacts from '../forms/Contact-portal'
import UserPostPortal from '../forms/User-post-portal'
import Dashboard from '../forms/Dashboard'
import LoadingSpinner from '../reusables/Loading-spinner'



const UserPage = (props) => {

  const [form, setForm] = useState('')
  const [user, setUser] = useState({})

  useEffect(() => {

    if (localStorage.getItem("email")) {
      axios.get(`http://localhost:8080/getUserByEmail/${localStorage.getItem("email")}`)
        .then((response) => {
          console.log(response.data)
          setUser(response.data)
          props.setIsLoading(false)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }, [])



  const handleWellView = (event) => {
    setForm(event.target.value)
  }

  const renderForm = () => {
    switch (form) {
      case 'My-Wearhouse':
        return (
          <MyWearhouse user={user} setUser={setUser} />
        )
        break;
      case 'My-contacts':
        return (
          <MyContacts user={user} setUser={setUser} />
        )
        break;
      case 'User-post-portal':
        return (
          <UserPostPortal user={user} setUser={setUser} />
        )
        break;
      case 'Dashboard':
        return (
          <Dashboard user={user} setUser={setUser} />
        )
        break;
    

      default:
        return null;
    }
  }

  const renderSpinnerOrContent = () => {
    console.log(props.user)
    if (props.isLoading) {
      return (
        <LoadingSpinner />
      )
    } else {
      return (
        <div className="flex-col fill">
          <div className="flex-row backgroung-grey justify-center header">
            <div className="inline margin-auto header">
              <button className='tile center' value='Dashboard' onClick={handleWellView}>Dashboard</button>
              <button className='tile center' value='My-Wearhouse' onClick={handleWellView}>My Wearhouse</button>
              <button className='tile center' value='My-contacts' onClick={handleWellView}>My Contacts</button>
              <button className='tile center' value='User-post-portal' onClick={handleWellView}>Posts</button>
              
            </div>
          </div>
          <div className='justify-center'>
            {renderForm()}
          </div>
        </div>
      )
    }
  }

  return (
    renderSpinnerOrContent()
  )


}
export default UserPage