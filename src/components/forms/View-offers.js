import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import UserPage from '../pages/User-Page'


const ViewOffers = (props) => {
    


    // const showPartOffers = () => {

    //     return props.user.parts.map((part) => {
    //         console.log(part)

    //         return part.offers.map((offer) => {

    //             axios.get(`localhost:8080/`)
    //             return (
    //                 <div className='flex-col give-border'>
    //                     <div className='flex-row'>
    //                         {offer.price}
    //                     </div>
    //                     <div className='flex-row'>
    //                         {offer.partId}
    //                     </div>
    //                 </div>
    //             )
    //         })


    //     })
    // }

    return (
        <div className='flex-col fill'>
            <div className='flex-row'>
                <div className='flex-col half-width'>
                    
                </div>
                <div className='flex-col half-width'>

                </div>
            </div>
        </div>
    )

}
export default ViewOffers