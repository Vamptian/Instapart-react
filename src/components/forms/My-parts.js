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
                <div className='flex-col part-box space-out  '>
                    <div className='flex-row'>
                        <label>Part Id: </label>
                         {part.id}
                    </div>
                    <div className='flex-row'>
                        <label>Avalibility :</label>
                        {toggle()}
                    </div>
                    <div className='flex-row'>
                        <label>name:</label>
                       {part.name}
                    </div>
                    <div className='flex-row give-border'>
                        <label>Description</label>
                        {part.discription}
                    </div>
                    <div className='flex-row'>
                        <label>Price:</label>
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