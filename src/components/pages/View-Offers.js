import '../../css/components/pages/view-offers.css'
import { useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'
import MyParts from '../forms/My-parts'
import ViewMyPost from '../forms/View-my-post'
import AcceptRejectOffers from '../forms/Accept-reject-offers'


const ViewOffers = (props) => {
    const [form, setForm] = useState('')
    const [ismodal, setIsmodal] = useState('')
    const [postId, setPostId] = useState(0)
    const [partId, setPartId] = useState({})



    const viewPostOffer = (event) => {

        setPostId(event.target.value)
        console.log(postId)
        setIsmodal('1')
    }
    const viewPartOffer = (event) => {

        setPartId(event.target.value)
        console.log(partId)
        setIsmodal('2')
    }

    const toggleModal = () => {
        console.log(ismodal)
        console.log(partId)
        if(ismodal !== '')
            return (
                <div className='flex-col fill position modal center'>
                    <AcceptRejectOffers postId={postId} user={props.user} setUser={props.setUser} ismodal={ismodal} setIsmodal={setIsmodal} partId={partId} />
                </div>
            )
       

    }

    const handleWellView = (event) => {
        setForm(event.target.value)

    }

    const showUserParts = () => {

        return props.user.parts.map((part) => {

            const toggle = () => {
                if (part.isAvailable) {
                    return (
                        <div>For Sale</div>
                    )
                } else {
                    return (
                        <div>Not for sale</div>
                    )
                }
            }

            return (
                <div className='flex-col part-box space-out  '>
                    <div className='flex-row'>
                        {part.id}
                    </div>
                    <div className='flex-row'>
                        {toggle()}
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
                        {part.offers.length} Offers
                    </div>
                    <div className='flex-row'>
                        <button value={part.id} onClick={viewPartOffer}>View Part Offers</button>
                    </div>
                </div>
            );


        })


    }

    const showMyPost = () => {

        return props.user.posts.map((post) => {

            return (<div className='flex-col post'>
                <div className='flex-row'>
                    {post.discription}
                </div>
                <div className='flex-row'>
                    {post.date}
                </div>
                <div className='flex-row'>
                    {post.offers.length}
                </div>
                <div className='flex-row'>
                    {post.id} Id
                </div>
                <div className='flex-row'>
                    <button name='postId' value={post.id} onClick={viewPostOffer}>View Offers</button>
                </div>
            </div>
            )


        })

    }





    const renderForm = () => {
        switch (form) {
            case 'My-parts':
                return (
                    showUserParts()
                )
                break;
            case 'My-post':
                return (
                    showMyPost()
                )
                break;
                
                    




        }
    }

    return (
        <div className='flex-col space-down1 wood'>
            <div className='flex-row center space-out inline'>
                <button className='buttons' value='My-post' onClick={handleWellView}>View post offers</button>
                <button className='buttons' value='My-parts' onClick={handleWellView}>View part offers</button>
            </div>
            <div className='flex-col take-width space scroll give-border all-post-box wall-background'>
                <div className='flex-col '>
                    {renderForm()}
                </div>
            </div>
            {toggleModal()}
        </div>
    )

}
export default ViewOffers