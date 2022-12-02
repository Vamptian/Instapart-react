import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'


const ShowAllUsers = (props) => {

    const [message, setMessage] = useState('')

    const [allUsers, setallUsers] = useState([])
    const [Users, setUsers] = useState([])

    const submitHandler = (event) => {
        console.log(event.target.value)

        axios.post(`http://localhost:8080/addContact/${event.target.value}`, props.user)
            .then((response) => {
                console.log(response.data)
                props.setUser(response.data)

            })
            .catch((e) => {
                console.log(e)
                setMessage(e.response.data)
            })

    }

    useEffect(() => {


        axios.get('http://localhost:8080/getAllUsers')
            .then((response) => {
                console.log(response.data)
                setallUsers(response.data)


            })
            .catch((e) => {
                console.log(e)
            })
    }, [])




    const getAllUsers = () => {



        return allUsers.map((user) => {
            if (user.id !== props.user.id) {
                return <div className='flex-col contact-card space-out '>
                    <div className='flex-row'>
                        {user.username}
                    </div>
                    <div className='flex-row'>
                        {user.email}
                    </div>
                    <div className='flex-row'>
                        {user.phoneNumber}
                    </div>

                    <button value={user.id} onClick={submitHandler}>ADD CONTACT</button>


                </div>
            }
        })


    }
    return (
        <div className='flex-col center'>
            {message}
            <div className=' center flex-wrap'>{getAllUsers()}</div>
        </div>
    )
}

export default ShowAllUsers