import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'



const ViewMyPost = (props) => {

    const showMyPost = () => {

        return props.user.posts.map((post) => {

            return (<div className='flex-col post'>
                <div className='flex-row center '>
                    <lable className=''>Description:..</lable>
                    <div className=''>{post.discription}</div>
                </div>
                <div className='flex-row center'>
                    <label>Offers on post :</label>
                    {post.offers.length}
                </div>

                <div className='flex-row bottom right'>
                    <div className='give-border'>
                        {post.date}
                    </div>
                </div>
            </div>
            )


        })

    }

    return (
        <div className='flex-col scroll'>
            <div className='flex-wrap post-box'> {showMyPost()}</div>
        </div>
    )

}
export default ViewMyPost