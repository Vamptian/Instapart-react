import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'


const DeletePart = (props) => {

    const [user, setUser] = useState({})
    const [message, setMessage] = useState('')
    const [deletePart, setdeletePart] = useState({
        partId: 0
    })

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempPart = { ...deletePart }
        tempPart[name] = value
        setdeletePart(tempPart)
    }


    const submitHandler = () => {
            
        if (deletePart.partId !== 0) {
            let bool = true
            for(const part of props.user.parts){
                console.log(part.id)
                if(part.id == deletePart.partId ){
                    console.log(part.id)
                     axios.get(`http://localhost:8080/DeletePart/${deletePart.partId}`)
                        .then((response) => {
                        console.log(response.data)
                         bool = false  
                         setMessage('')           
                }).catch((e) => {
                    console.log(e)
                    setMessage(e.response.data)
                })
                }
            }if(bool){
                setMessage('this is not ur part')
            }
        } 
            else{
                setMessage('part id cant be 0')
            }
    }




return(
    <div className='flex-col center'>
            <div className='flex-row'>
                <h1>please enter a part id to delete</h1>
            </div>
            <div className='flex-row'>
            <div><h5>{message}</h5></div>
            </div>
            
         
            <label>enter part number</label>
            <input type='number' name="partId" value={deletePart.partId} onChange={changeHandler} />
 
            
            <div className='space-out center'>
                <button className='input-button' onClick={submitHandler}>SUBMIT</button>
            </div>
    </div>
)

}
export default DeletePart