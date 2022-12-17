import { useNavigate } from 'react-router'
import '../../css/components/reusables/header.css'

const Header = (props) => {

    const clickHandler = () => {
        localStorage.removeItem('email')
        props.setUser({})
        navigator('/')
    }

    // const navigator = useNavigate()


    const renderSignInOutButtons = () => {
        if (props.user.email === undefined){
            return(
            <div class="dropdown tile flex-col ">
             <span className='fill center'>MY ACCOUNT</span>
                <div class="dropdown-content">
                    <p><li className='dropdown-buttons'><a href="/Sign-in">Log In</a></li></p>
                    <p><li className='dropdown-buttons'><a href="/Sign-up">Sign Up</a></li></p>
                </div>
            </div>)
        }else{
            return(
            <div class="dropdown tile flex-col ">
             <span className='fill center'>MY ACCOUNT</span>
                <div class="dropdown-content">
                    <p><li className='dropdown-buttons'><a href="/User-Page">My Account</a></li></p>
                    <button onClick={clickHandler} className='dropdown-buttons'><p><li className='dropdown-buttons'><a href="/">Sign Out</a></li></p></button>
                </div>
            </div>)
        }
    }




return(
    <div className='flex-row background-teal header-main fill-header'>
        <div className='flex-col third-width center'>
            <div className='flex-row center'>
                <a className='logo ' href='/'>INSTA-PART</a>
            </div>
        </div>
        <div className='flex-row two-third-width inline center'>
            <div class="dropdown tile flex-col ">
             <span className='fill center'>BROWSE</span>
                <div class="dropdown-content">
                <p><li className='dropdown-buttons'><a href="/All-parts">Show allparts</a></li></p>
                    <p><li className='dropdown-buttons'><a href="/All-post">Look through posts</a></li></p>
                </div>
            </div>
            {renderSignInOutButtons()}
            <div class="dropdown tile flex-col ">
             <span className='fill center'>CONTACT US</span>
                <div class="dropdown-content">
                    <p><button className='dropdown-buttons' >ONLINE HELP DESK</button></p>
                    <p><button className='dropdown-buttons'>CALL OR EMAIL</button></p>
                </div>
            </div>
        </div>
    </div>
);
}
export default Header