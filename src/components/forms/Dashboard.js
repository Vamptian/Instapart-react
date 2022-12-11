import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import ViewMyPost from './View-my-post'
import MyParts from './My-parts'

const Dashboard = (props) => {
    let postOffers = 0
    let partOffers = 0

    const howManyPostOffers = () => {

        for (const post of props.user.posts) {
            postOffers += post.offers.length
        }
        return postOffers

    }

    const howManyPartOffers = () => {

        for (const part of props.user.parts) {
            partOffers += part.offers.length
        }
        return partOffers

    }


    return (
        <div className='flex-col wood center fill'>
            <div className='flex-row space'>
                <div className='flex-col  '>
                    <div className='flex-col user-card wall-background center'>
                        <div className='flex-row space1'>
                            <h1>Welcome {props.user.username}</h1>
                        </div>
                        <div className='flex-row center'>
                            <label>Email :</label>
                            {props.user.email}
                        </div>
                        <div className='flex-row space center'>
                            <label>phoneNumber :</label>
                            {props.user.phoneNumber}
                        </div>
                        <div className='flex-row space center'>
                            <a href='/View-Offers' className='view-offer center'>View Offers</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex-col   '>
                <h1 className='center'>Welcome to your dashboard</h1>
                <div className='flex-row give-border wall-background '>
                    <div className='flex-col center space-out'>
                        <h3>Parts in your storage</h3>
                        {props.user.parts.length}
                    </div>
                    <div className='flex-col center space-out'>
                        <h3>Parts you are requesting</h3>
                        {props.user.posts.length}
                    </div>
                    <div className='flex-col center space-out'>
                        <h3>Part offers recived</h3>
                        {howManyPartOffers()}
                    </div>
                    <div className='flex-col center space-out'>
                        <h3>Post offers recived</h3>
                        {howManyPostOffers()}
                    </div>
                </div>
            </div>
            <div className='flex-row move-down '>
                <div className='flex-col half-width'>
                    <div className='flex-col take-width give-border wall-background '>
                        <h1 className='center'>Recent Post By Me</h1>
                        <ViewMyPost user={props.user} setUser={props.setUser} />
                    </div>
                </div>
                <div className='flex-col half-width'>
                    <div className='flex-col take-width give-border wall-background '>
                        <h1 className='center'>My Parts</h1>
                        <MyParts user={props.user} setUser={props.setUser} />
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Dashboard