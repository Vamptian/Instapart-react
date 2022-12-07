import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import ViewOffers from '../pages/View-Offers'


const AcceptRejectOffers = (props) => {
    const [post, setPost] = useState({})
    const [part, setPart] = useState({})

    const makePartTransfer = (event) => {

        axios.post(`http://localhost:8080/makePartTransfer/${event.target.value}/${part.id}`, props.user)
        .then((response) => {
            console.log(response.data)
            props.setUser(response.data)

        })
        .catch((e) => {
            console.log(e)
        })
    }

    const makeTransfer = (event) => {
        console.log(props.user)
        console.log(props.user)
        axios.post(`http://localhost:8080/makeTransfer/${event.target.value}/${post.id}`, props.user)
            .then((response) => {
                console.log(response.data)
                props.setUser(response.data)

            })
            .catch((e) => {
                console.log(e)
            })
    }

    const showPartOffers = () => {
        if (part.id === undefined) {
            return (
                <div>'</div>
            )
        }
        else {
            return part.offers.map((offer) => {
                return(
                    <div className='flex-col give-border space backgroung-white post'>
                        <div className='flex-row'>
                            {offer.price} price
                        </div>
                        <div className='flex-row'>
                            {offer.user.username} user
                        </div>
                        <button className='buttons' value={offer.id} onClick={makePartTransfer}>Accept Offer</button>
                    </div>
                )
            })
        }
    }

    const showPostOffers = () => {
        if (post.id === undefined) {
            return (
                <div>'</div>
            )
        }
        else {

            return post.offers.map((offer) => {
                return (
                    <div className='flex-col give-border space backgroung-white post'>
                        <div className='flex-row'>
                            {offer.user.username}
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

        console.log(props.postId)
        console.log(props.partId)
        if (props.ismodal === '1') {
            axios.get(`http://localhost:8080/getPostById/${props.postId}`)
                .then((response) => {
                    console.log(response.data)

                    setPost(response.data)
                    console.log(props.post)

                })
                .catch((e) => {
                    console.log(e)
                })
            }else if(props.ismodal === '2'){
                axios.get(`http://localhost:8080/getPartById/${props.partId}`)
                .then((response) => {
                    console.log(response.data)

                    setPart(response.data)
                    

                })
                .catch((e) => {
                    console.log(e)
                })
            }
        }, [props.postId, props.part])


    const showModel = () => {
        console.log(props.ismodal)

        if (props.ismodal === '1') {
            return (
                <div className='flex-col give-border modal-box background-teal'>
                    <div className='flex-row max'>
                        <div className='flex-col half-width center'>
                            <h1>Accept or reject offer</h1>
                        </div>
                        <div className='flex-col half-width give-border scroll '>
                            {showPostOffers()}
                        </div>
                    </div>
                </div>
            )
        }
        if (props.ismodal === '2') {
            return (
                <div className='flex-col give-border modal-box background-teal'>
                    <div className='flex-row max'>
                        <div className='flex-col half-width center'>
                            <h1>Accept or reject offer on part</h1>
                        </div>
                        <div className='flex-col half-width give-border scroll '>
                            {showPartOffers()}
                        </div>
                    </div>
                </div>
            )
        }

    }
    return (
        showModel()
    )
}
export default AcceptRejectOffers