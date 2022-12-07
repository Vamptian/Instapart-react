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
        <div className='flex-col fill space'>
            <div className='flex-row'>
                <div className='flex-col third-width center'>
                    <div className='flex-col user-card background-beige'>
                        <div className='flex-row space1'>
                            <h1>Welcome {props.user.username}</h1>
                        </div>
                        <div className='flex-row space1 center'>
                            <label>Email :</label>
                            {props.user.email}
                        </div>
                        <div className='flex-row space center'>
                            <label>phoneNumber :</label>
                            {props.user.phoneNumber}
                        </div>
                        <div className='flex-row space center'>
                            <a href='/View-Offers'>View Offers</a>
                        </div>
                    </div>
                </div>
                <div className='flex-col third-width space-apart'>
                    <div className='flex-col user-card background-beige space'>
                        <div className='flex-row space1 margin-auto '>
                            <h1>Post Offers Received</h1>
                        </div>
                        <div className='flex-row space1 margin-auto '>
                            <h1>{howManyPostOffers()}</h1>
                        </div>
                        <div className='flex-row space1 margin-auto '>
                            <h1>Part Offers Received</h1>
                        </div>
                        <div className='flex-row space1 margin-auto '>
                            <h1>{howManyPartOffers()}</h1>
                        </div>

                    </div>
                </div>
                <div className='flex-col third-width'>
                    <div className='flex-col user-card background-beige space'>
                        <div className='flex-row space1 margin-auto'>
                            <h1>Parts in wearhouse</h1>
                        </div>
                        <div className='flex-row space1 margin-auto'>
                            <h1>{props.user.parts.length}</h1>
                        </div>
                    </div>
                    <div className='flex-col user-card background-beige'>
                        <div className='flex-row space1 margin-auto'>
                            <h1>Parts Your Requesting</h1>
                        </div>
                        <div className='flex-row space1 margin-auto'>
                            <h1>{props.user.posts.length}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-row move-down '>
                <div className='flex-col half-width'>
                    <div className='flex-col take-width give-border background-beige '>
                        <h1 className='center'>Recent Post By Me</h1>
                        <ViewMyPost user={props.user} setUser={props.setUser} />
                    </div>
                </div>
                <div className='flex-col half-width'>
                    <div className='flex-col take-width give-border background-beige '>
                        <h1 className='center'>My Parts</h1>
                        <MyParts user={props.user} setUser={props.setUser} />
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Dashboard