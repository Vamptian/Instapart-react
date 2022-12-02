import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'



const ViewMyPost = (props) => {

    const showMyPost = () =>{

        return props.user.posts.map((post) => {

           return(<div className='flex-col post'>
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
                    <button>View Offers</button>
                </div>
            </div>
           )


        })

    }

return(
    <div className='flex-col scroll'>
    <div className='flex-wrap post-box'> {showMyPost()}</div>
    </div>
)

}
export default ViewMyPost