import '../../css/forms.css'
import CreatePart from './Create-part'
import { useEffect, useState } from "react"
import MyParts from './My-parts'
import DeletePart from './Delete-part'
import ShowAllUsers from './Show-all-users'
import axios from 'axios'
import CreatePost from './Create-post'
import ViewMyPost from './View-my-post'

const UserPostPortal = (props) => {
    const [form, setForm] = useState('')



    const renderForm = () => {
        switch(form) {
          case 'Veiw-my-post':
            return(
                <ViewMyPost user = {props.user} setUser={props.setUser}/>
            )
            break;
            case 'Create-post':
                return(
                    <CreatePost user = {props.user} setUser={props.setUser}/>
             )
            break;
          default: 
            return null;
        }
      }
      const handleWellView = (event) => {
        setForm(event.target.value)
      }

return(
    <div className='flex-row fill center take-width'>
       <div className='flex-col third-width center nav-menu space wood'>
            <div className='flex-row space'>
                <button className='nav-buttons' value='Veiw-my-post' onClick={handleWellView}>Veiw My Post</button>
            </div>
            <div className='flex-row space'>
                <button className='nav-buttons' value='Create-post' onClick={handleWellView}>Create Post</button>
            </div><div className='flex-row space'>
                <button className='nav-buttons'>Something</button>
            </div>
       </div>
       <div className='flex-col two-third-width post-box wall-background'>
        <div className='flex-col flex-wrap give-border'>
        {renderForm()}
        </div>
       </div>
    </div>
)

}
export default UserPostPortal