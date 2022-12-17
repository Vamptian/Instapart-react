import '../../css/forms.css'
import CreatePart from './Create-part'
import { useEffect, useState } from "react"
import MyParts from './My-parts'
import DeletePart from './Delete-part'
import ShowAllUsers from './Show-all-users'
import axios from 'axios'
const MyContacts = (props) => {

    const submitHandler = (event) => {
        console.log(event)

        axios.post(`http://localhost:8080/removeContact/${event.target.value}`, props.user)
            .then((response) => {
                console.log(response.data)
                props.setUser(response.data)
                setForm('')
            })
            .catch((e) => {
                console.log(e)
            })

    }

    const [form, setForm] = useState('')


    const showUserContacts = () => {

        return props.user.contacts.map((user) => {

            console.log(user.id)

            return (


                <div className='flex-col contact-card white-background space-out'>
                    <div className='flex-row'>
                        {user.username}
                    </div>
                    <div className='flex-row'>
                        {user.email}
                    </div>
                    <div className='flex-row'>
                        {user.phoneNumber}
                    </div>
                    <button value={user.id} onClick={submitHandler}>REMOVE CONTACT</button>
                </div>


            )




        })
    }
    const handleWellView = (event) => {
        setForm(event.target.value)
    }


    const renderForm = () => {
        switch (form) {
            case 'show-all-users':
                return (
                    <ShowAllUsers user={props.user} setUser={props.setUser} />
                )
                break;
            case 'my-contacts':
                return (
                    <div className='flex-col'>
                        <div className='flex-wrap center'>{showUserContacts()}</div>
                    </div>
                )
                break;
            default:
                return null;
        }
    }

    return (
        <div className='flex-col container center wood'>
            <div className='flex-col contact-portal background-teal '>
                <div className='flex-row inline center margin-vert'>
                    <button className='port-buttons' value='my-contacts' onClick={handleWellView}>my contact</button>
                    <button className='port-buttons' value='show-all-users' onClick={handleWellView}>all users</button>
                </div>
                <div className='flex-col view-port justify-center scroll wall-background'>

                    {renderForm()}

                </div>
            </div>

        </div>
    )




}
export default MyContacts