import '../../css/forms.css'
import { useEffect, useState } from "react"
import axios from 'axios'

const CreatePost = (props) =>{
    const [message, setMessage] = useState('')
    const [user, setUser] = useState({})

    const [post, setPost] = useState({
        discription: '',
        date: '',
        offers: []
    })

const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    const tempPost = { ...post }
    tempPost[name] = value
    setPost(tempPost)
}

const submitHandler = () => {

    if(post.discription !== null && post.date !== null){
        axios.post(`http://localhost:8080/createPost/${props.user.id}`, post)
        .then((response) => {
            console.log(response.data)
            props.setUser(response.data)

        }).catch((e) => {
            console.log(e)
            setMessage(e.response.data)
        })

} 
    else{
        setMessage('post info canot be blank')
    }
}
    



    return(
        <div className='flex-col center '>
            <div className='flex-row'>
            <h1>Create a Post</h1>
            </div>
            <label>Please enter all information about the part</label>
            <input className='' type='text' name="discription" value={post.discription} onChange={changeHandler} />
            <label className='space'>Enter the date</label>
            <input className='' type='date' name="date" value={post.date} onChange={changeHandler} />
            <div className='space-out center'>
                <button className='input-button center' onClick={submitHandler}>SUBMIT</button>
            </div>
        </div>
    )

}
export default CreatePost