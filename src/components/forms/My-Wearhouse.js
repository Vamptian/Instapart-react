import '../../css/forms.css'
import CreatePart from './Create-part'
import { useEffect, useState } from "react"
import MyParts from './My-parts'
import DeletePart from './Delete-part'


const MyWearhouse = (props) => {

    const [form, setForm] = useState('')
    

    const handleWellView = (event) => {
        setForm(event.target.value)
      }
    
      const renderForm = () => {
        switch(form) {
          case 'create-part':
            return(
              <CreatePart user = {props.user} setUser={props.setUser}/>
            )
            break;
            case 'my-parts':
                return(
               <MyParts user = {props.user} setUser={props.setUser}/>
             )
            break;
            case 'delete-part':
              return(
             <DeletePart user = {props.user} setUser={props.setUser}/>
           )
          break;
          default: 
            return null;
        }
      }


return(
    <div className='flex-row full-width'> 
        <div className='flex-col quarter-width wood center'>
                <button className='side-bar-button space-out' value='create-part' onClick={handleWellView} >Add Part</button>
                <button className='side-bar-button space-out' value='delete-part' onClick={handleWellView}>Delete Part</button>
                <button className='side-bar-button space-out' value='my-parts' onClick={handleWellView}>My Parts</button>
        </div>
        <div className='flex-col three-quarter-width center give-border wall-background  '>
                <div className='flex-col flex-wrap '>
                {renderForm()}
                </div>
        </div>
        
    </div>
)

}
export default MyWearhouse