import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'


const CreatePart = (props) => {

    const [message, setMessage] = useState('')

    const [user, setUser] = useState({})
    const [isAvailable, setIsAvailable] = useState(false)

    const [part, setPart] = useState({
        
        name: '',
        discription: '',
        price: 0
    })

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempPart = { ...part }
        tempPart[name] = value
        setPart(tempPart)
    }

const toggle = () => {
    if (isAvailable) {
        setIsAvailable(false)
    } else {
        setIsAvailable(true)
    }
}

    const submitHandler = () => {

        if (part.name != '' && part.discription != '' && part.price != 0) {
                // part.price  = Number(part.price)
                part.isAvailable = isAvailable
                console.log(props.user.id)
                console.log(part)
                console.log(props.user)
            axios.post(`http://localhost:8080/createPart/${props.user.id}`, part)
                .then((response) => {
                    console.log(response.data)
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

    useEffect(() => {
    
        if(localStorage.getItem("email")) {
            axios.get(`http://localhost:8080/getUserByEmail/${localStorage.getItem("email")}`)
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
        }
    }, [])


return(
    <div className='flex-col form'> 
        <div className='flex-row'>CREATE PART</div>
        <div className='flex-row'>Please enter all part information</div>
        <label>Is this for sale</label>
            <input type='checkbox' value={part.isAvailable} onChange={toggle} />

            <label>Name</label>
            <input className='' type='text' name="name" value={part.name} onChange={changeHandler} />

            <label>Discription</label>
            <input className='' type='text' name="discription" value={part.discription} onChange={changeHandler} /> 
            
            <label>Price</label>
            <input className='' type='number' name="price" value={part.price} onChange={changeHandler} />

            <div className='space-out center'>
                <button className='input-button' onClick={submitHandler}>SUBMIT</button>
            </div>
    </div>
)

}

export default CreatePart