import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import ViewOffers from '../pages/View-Offers'


const AcceptRejectOffers = (props) => {
    const [post, setPost] = useState({})
    const [part, setPart] = useState({})

    const closeModal = () =>{
        console.log('set modal to empty string ')
        props.setIsModal('')
    }

    const makePartTransfer = (event) => {

        axios.post(`http://localhost:8080/makePartTransfer/${event.target.value}/${part.id}`, props.user)
        .then((response) => {
            console.log(response.data)
            props.setUser(response.data)
            props.setIsModal('')
        })
        .catch((e) => {
            console.log(e)
        })
    }

    const makeTransfer = (event) => {
        
        
        axios.post(`http://localhost:8080/makeTransfer/${event.target.value}/${post.id}`, props.user)
            .then((response) => {
                console.log(response.data)
                props.setUser(response.data)
                props.setIsModal('')

            })
            .catch((e) => {
                console.log(e)
            })
    }

    const showPartOffers = () => {
        if (part.id === undefined) {
            return (
                <div></div>
            )
        }
        else {
            return part.offers.map((offer) => {
                return(
                    <div className='flex-col give-border space backgroung-white post'>
                        <div className='flex-row'>
                            {offer.price} price
                        </div>

                        <button className='buttons' value={offer.id} onClick={makePartTransfer}>Accept Offer</button>
                    </div>
                )
            })
        }
    }

    const showPostOffers = () => {
        console.log(props.postId)
        console.log(`/${post.Id} post.Id`)
        if (post.id === undefined) {
            return (
                <div></div>
            )
        }
        else {

            return post.offers.map((offer) => {
                return (
                    <div className='flex-col give-border space backgroung-white post'>
                        <div className='flex-row'>
                            {offer.userId}
                        </div>
                        <div className='flex-row'>
                            {offer.price} price
                        </div>
                        <div className='flex-row'>
                            {offer.part.discription}
                        </div>
                        <div className='flex-row'>
                            {offer.id} offer id
                        </div><div className='flex-row'>
                            <button value={offer.id} onClick={makeTransfer}> accept this part</button>
                        </div>
                    </div>
                )
            })
        }
    }

    useEffect(() => {
        console.log(`/${props.isModal} isModel`)
        console.log(`/${props.partId} props.partId`)
        console.log(`/${props.postId} props.postId`)
        if (props.isModal === '1') {
            axios.get(`http://localhost:8080/getPostById/${props.postId}`)
                .then((response) => {
                    console.log(response.data)

                    setPost(response.data)
                    

                })
                .catch((e) => {
                    console.log(e)
                })
            }else if(props.isModal === '2'){
                console.log("here")
                axios.get(`http://localhost:8080/getPartById/${props.partId}`)
                .then((response) => {
                    console.log(response.data)

                    setPart(response.data)
                    props.setIsModal('')

                })
                .catch((e) => {
                    console.log(e)
                })
            }
        }, [props.postId, props.partId, props.ismodal])


    const showModal = () => {
        console.log(`/${props.isModal} isModel`)
        console.log(`/${props.partId} partId`)
        console.log(`/${props.postId} postId`)

        if (props.isModal === '1') {
            return (
                <div className='flex-col give-border modal-box wood'>
                    <div className='flex-row right give-border background-teal'>
                        <div>
                            <button onClick={closeModal} className='close-button'>X</button>
                        </div>
                    </div>
                    <div className='flex-row max'>
                        <div className='flex-col half-width center'>
                            <h1>Accept or reject offer</h1>
                            {post.discription}
                        </div>
                        
                        <div className='flex-col half-width give-border scroll wall-background '>
                            {showPostOffers()}
                        </div>
                    </div>
                </div>
            )
        }
        if (props.isModal === '2') {
            return (
                <div className='flex-col give-border modal-box wood'>
                    <div className='flex-row right give-border background-teal'>
                        <div>
                            <button onClick={closeModal} className='close-button'>X</button>
                        </div>
                    </div>
                    <div className='flex-row max  '>
                        <div className='flex-col half-width center'>
                            <h1>Accept or reject offer on part</h1>
                        </div>
                        <div className='flex-col half-width give-border scroll wall-background '>
                            {showPartOffers()}
                        </div>
                    </div>
                </div>
            )
        }

    }
    return (
        showModal()
    )
}
export default AcceptRejectOffers