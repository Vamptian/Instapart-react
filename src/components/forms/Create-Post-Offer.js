import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'

const CreatePostOffer = (props) => {
    const [message, setMessage] =useState('')
    const [partId, setPartId] = useState(0)
    const [offer, setOffer] = useState({
        price: 0
    })

    const closeModal = () =>{
        
        props.setIsmodal(false)
    }

    const createOffer = () => {
        
        if (offer.price != '' && partId != '') {
            axios.put(`http://localhost:8080/createPostOffer/${partId}/${props.post.postId}/${props.user.id}`, offer)
                .then((response) => {
                    console.log(response.data)
                    setMessage('')
                    props.setIsmodal(false)
                    
                })
                .catch((e) => {
                    console.log(e)
                    setMessage(e)
                })
        }
    }

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempOffer = { ...offer }
        tempOffer[name] = value
        setOffer(tempOffer)

    }

    const addPart = (event) => {
        setPartId(event.target.value)
        
    }

    const showAllPart = () => {


        return props.user.parts.map((part) => {

            return (
                <div className='flex-col post'>
                    <div className='flex-row'>
                        {part.id}
                    </div>
                    <div className='flex-row'>
                        {part.name}
                    </div>
                    <div className='flex-row'>
                        {part.discription}
                    </div>
                    <div className='flex-row'>
                        {part.price}
                    </div>
                    <div className='flex-row'>
                        {part.offers.length}
                    </div>
                    <div className='flex-row'>
                        <button value={part.id} onClick={addPart}>Offer part</button>
                    </div>
                </div>
            )
        })
    }

    const toggleMessage = () => {
        if (partId == 0) {
            return (
                <div>please select a part</div>
            )
        }else if(offer.price == ''){
           
        }
        else {
            return (
                <div>{partId}</div>
            )
        }


    }


    return (
        <div className='flex-col give-border modal-box  '>
            <div className='flex-row right give-border background-teal'>
                        <div>
                            <button onClick={closeModal} className='close-button'>X</button>
                        </div>
                    </div>
            <div className='flex-row scroll wood'>
                <div className='flex-col half-width give-border '>
                    <div className='flex-row center'>
                        <h1>Place an offer</h1>
                    </div>
                    <div className='flex-row center'>
                        <lable>Please enter a price</lable>
                    </div>
                    <div className='flex-row center modal-input margin-auto '>
                        <input defaultValue={1} className='' type='number' name='price' value={offer.price} onChange={changeHandler} />
                    </div>
                    <div className='flex-row center'>
                        {toggleMessage()}
                    </div>
                    <div className='flex-row center padding-bottom'>
                        <button className='input-button' onClick={createOffer}>Submit</button>
                    </div>
                </div>
                <div className='flex-col half-width wrap scroll give-border'>
                    <div className='flex-row center'>
                        <h2>Please select a part to offer</h2>
                    </div>
                    {showAllPart()}
                </div>
            </div>
        </div>

    )
}
export default CreatePostOffer