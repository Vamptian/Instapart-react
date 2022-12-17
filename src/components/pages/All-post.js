import '../../css/components/pages/all-post.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'
import '../../css/forms.css'
import LoadingSpinner from '../reusables/Loading-spinner'
import CreatePostOffer from '../forms/Create-Post-Offer'

const AllPost = (props) => {
const [allPosts, setAllPosts] = useState([])
    const [count, setCount] = useState(0)

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({
        postId: 0
    })
    const [ismodal, setIsmodal] = useState(false)

   

    const handleOnChange = async (event) => {
        let value = event.target.value;
        if (value.length > 2) {
            let search = await arraySearch(allPosts, value);
            setPosts(search)
            setCount(search.length)
        }

        else {
            setPosts(allPosts)
            setCount(allPosts.length)
        }
    }

    const arraySearch = (array, keyword) => {
        const searchTerm = keyword.toLowerCase()
        return (array.filter(value => {
            return value.discription.toLowerCase().match(new RegExp(searchTerm, 'g'))
        }))
    }

    useEffect(() => {

        axios.get(`http://localhost:8080/getAllPost/${props.user.id}`)
            .then((response) => {
                console.log(response.data)

                setAllPosts(response.data)
                props.setIsLoading(false)
                setCount(allPosts.length)

            })
            .catch((e) => {
                console.log(e)
            })

    }, [props.user])


    const toggleModal = () => {
        console.log(post.postId)
        if (ismodal) {
            return (
                <div className='flex-col fill position modal center'>
                    <CreatePostOffer user={props.user} post={post} setIsmodal={setIsmodal} />
                </div>
            )
        } else { return null }

    }
    const createOffer = (event) => {

        const name = event.target.name
        const value = event.target.value
        const tempPost = { ...post }
        tempPost[name] = value
        setPost(tempPost)
        console.log(post.postId)
        setIsmodal(true)
    }


    const showAllPost = () => {

        if (count === 0) {
            return allPosts.map((post) => {

                return (
                    <div className='flex-col post'>
                    <div className='flex-row center '>
                        <lable className=''>Description:..</lable>
                        <div className=''>{post.discription}</div>
                    </div>
                    <div className='flex-row center'>
                        <label>Offers on post :</label>
                        {post.offers.length}
                    </div>
                    <div className='flex-row center'>
                        <button name='postId' value={post.id} onClick={createOffer}>Place offer</button>
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


        return posts.map((post) => {

            return (
                <div className='flex-col post'>
                    <div className='flex-row center '>
                        <lable className=''>Description:..</lable>
                        <div className=''>{post.discription}</div>
                    </div>
                    <div className='flex-row center'>
                        <label>Offers on post :</label>
                        {post.offers.length}
                    </div>
                    <div className='flex-row center'>
                        <button value={post} onClick={createOffer}>Place offer</button>
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

    const renderSpinnerOrContent = () => {
        // console.log(props.user)
        if (props.isLoading) {
            return (
                <LoadingSpinner />
            )
        } else {
            return (
                <div className='flex-col wood space-down1 fill '>
                    <div className='flex-row'>
                        <div>
                            {createOffer}
                        </div>
                    </div>
                    <div className='flex-row center'>
                        <h1>search Through All Post</h1>
                    </div>
                    <div className='flex-row center '>
                        <input className='' type="text" name="search" id="search" placeholder="Search Filter" onChange={handleOnChange} />
                    </div>
                    <div className='flex-row center'>
                       <h2> {count} Results found</h2>
                    </div>
                    <div className='flex-col take-width space-down1 scroll give-border all-post-box wall-background'>
                        <div className='flex-col  '>
                            {showAllPost()}
                        </div>
                    </div>
                    {toggleModal()}
                </div>
            )
        }
    }

    return (
        renderSpinnerOrContent()
    )

}
export default AllPost