import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'

const CreatePartOffer = (props) => {

    const [message, setMessage] =useState('')
    const [part, setPart] =useState({})
    
    const [offer, setOffer] = useState({
        price: 0
    })

    const closeModal = () =>{
        console.log('here')
        props.setIsmodal(false)
    }

    useEffect(() => {

        axios.get(`http://localhost:8080/getPartById/${props.part.partId}`)
            .then((response) => {
                console.log(response.data)
                setPart(response.data)
                

            })
            .catch((e) => {
                console.log(e)
            })

    }, [])


    const createOffer = () => {
        console.log(props.part)

        if (offer.price != '' && props.part.Id != '') {
            axios.post(`http://localhost:8080/createPartOffer/${part.id}/${props.user.id}`, offer)
                .then((response) => {
                    console.log(response.data)
                    
                    props.setIsmodal(false)
                    setMessage('')
                })
                .catch((e) => {
                    setMessage('invalid part id or price')
                    console.log(e)
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



    return (

        <div className='flex-col give-border modal-box wood '>
            <div className='flex-row right give-border background-teal'>
                        <div>
                            <button onClick={closeModal} className='close-button'>x</button>
                        </div>
                    </div>
            <div className='flex-row fill'>
                
                <div className='flex-col two-third-width '>
                        {message}
                    <div className='flex-row center space-out underlined'>
                        <h1>Place an Offer</h1>
                    </div>
                    <div className='flex-row center modal-input bidPartInput  '>
                        <lable className="bidPartLabel">Bid Amount: </lable>
                        <input name='price' value={offer.price}  type='number' onChange={changeHandler} className="" />
                    </div>
                    <div className='flex-row center padding-bottom'>
                        <button className='input-button ' onClick={createOffer} >Submit Offer</button>
                    </div>
                </div>
                <div className='flex-col center third-width'>
                    <div className='flex-col wall-background  give-border'>
                    <div className='flex-row center'>
                        <h1 className=''><label>part: </label>{part.name} </h1>
                    </div>
                    <div className='flex-row center'>
                        <h3 className=''>{part.discription} </h3>
                    </div>
                    <div className='flex-row center'>
                        <h1 className=''><label>price </label>{part.price} </h1>
                    </div></div>
                </div>
            </div>

        </div>

    )
}
export default CreatePartOffer