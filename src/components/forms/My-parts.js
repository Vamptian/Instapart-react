import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'

const MyParts = (props) => {

    const [user, setUser] = useState({})
    const [myParts, setMyParts] = useState([])
    const [isAvailable, setIsAvailable] = useState(false)



    


    const showUserParts = () =>{

        return props.user.parts.map((part) =>{

            const toggle = () => {
                if (part.isAvailable) {
                    return(
                        <div>For Sale</div>
                    )
                } else {
                    return(
                        <div>Not for sale</div>
                    )
                }
            }

            return(
                <div className='flex-col part-box space-out '>
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
                </div>
            );


        })


    }

return(

    
    <div className='flex-col'>
        <div className='flex-wrap form-box'>{showUserParts()}</div>
    </div>





)


}
export default MyParts