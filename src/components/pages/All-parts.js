import '../../css/components/pages/all-post.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'
import '../../css/forms.css'
import LoadingSpinner from '../reusables/Loading-spinner'
import CreatePartOffer from '../forms/Create-Part-Offer'

const AllParts = (props) => {

    const [user, setUser] = useState({})
    const [allParts, setAllParts] = useState([])
    const [count, setCount] = useState(0)
    const [parts, setParts] = useState([])
    const [ismodal, setIsmodal] = useState(false)
    const [part, setPart] = useState({
        partId: 0
    })

    useEffect(() => {

        if (props.user.id !== undefined) {
            console.log("here")
            axios.get(`http://localhost:8080/getAllParts/${props.user.id}`)
                .then((response) => {
                    console.log(response.data)

                    setAllParts(response.data)
                    props.setIsLoading(false)

                })
                .catch((e) => {
                    console.log(e)
                })
        } else { console.log(props.data) }
    }, [props.user])


    const createOffer = (event) => {

        const name = event.target.name
        const value = event.target.value
        const tempPart = { ...part }
        tempPart[name] = value
        setPart(tempPart)
        setIsmodal(true)
    }

    const toggleModal = () => {

        // console.log(part.partId)



        if (ismodal) {
            return (
                <div className='flex-col fill position modal center '>
                    <CreatePartOffer user={props.user} part={part} setIsmodal={setIsmodal} />
                </div>
            )
        } else { return null }

    }

    const handleOnChange = async (event) => {
        let value = event.target.value;
        if (value.length > 2) {
            let search = await arraySearch(allParts, value);
            setParts(search)
            setCount(search.length)
        } else {
            setParts(allParts)
            setCount(allParts.length)
        }
    }

    const arraySearch = (array, keyword) => {
        const searchTerm = keyword.toLowerCase()
        return (array.filter(value => {
            return value.name.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
                value.discription.toLowerCase().match(new RegExp(searchTerm, 'g'))

        }))
    }

    const showAllPart = () => {

        if (count === 0) {
            return allParts.map((part) => {

                return (
                    <div className='flex-col all-parts space-out'>
                        <div className='flex-row'>
                            <label>Part Id: </label>
                            {part.id}
                        </div>
                        <div className='flex-row center'>
                            <label>name:</label>
                            {part.name}
                        </div>
                        <div className='flex-row give-border center'>
                            <label>Description</label>
                            {part.discription}
                        </div>
                        <div className='flex-row center'>
                            <label>Price:</label>
                            {part.price}
                        </div>
                        <div className='flex-row center'>
                            <label>Offers:</label>
                            {part.offers.length}
                        </div>
                        <div className='flex-row center'>
                            <button name='partId' value={part.id} onClick={createOffer}>Place offer</button>
                        </div>
                    </div>
                )
            })
        }

        else {
            return parts.map((part) => {

                return (
                    <div className='flex-col all-parts space-out '>
                        <div className='flex-row'>
                            <label>Part Id: </label>
                            {part.id}
                        </div>
                        <div className='flex-row center'>
                            <label>name:</label>
                            {part.name}
                        </div>
                        <div className='flex-row give-border center'>
                            <label>Description</label>
                            {part.discription}
                        </div>
                        <div className='flex-row center'>
                            <label>Price:</label>
                            {part.price}
                        </div>
                        <div className='flex-row center'>
                            <label>Offers:</label>
                            {part.offers.length}
                        </div>
                        <div className='flex-row center'>
                            <button name='partId' value={part.id} onClick={createOffer}>Place offer</button>
                        </div>
                    </div>
                )
            })
        }
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
                    <div className='flex-row center'>
                        <h1>search Through Parts</h1>
                    </div>
                    <div className='flex-row center'>
                        <input type="text" name="search" id="search" placeholder="Search Filter" onChange={handleOnChange} />
                    </div>
                    <div className='flex-row center'>
                       <h2> {count} Results found</h2>
                    </div>
                    <div className='flex-col take-width space-down1 scroll border-view all-post-box wall-background'>
                        <div className='flex-col center '>
                            {showAllPart()}
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
export default AllParts