import '../../css/components/reusables/header.css'


const Footer = () => {

return(
    <div className='flex-row background-teal fill underlined'>
        <div className='flex-col  third-width'>
            <h1 className='center'>Contact us</h1>
            <h2 className='center'>Email</h2>
            <h2 className='center'>Phone Number</h2>
        </div>
        <div className='flex-col center third-width underlined'>
            <h1>Tech Stack</h1>
            <h2>Spring Boot</h2>
            <h2>React</h2>
            <h2>MYSQL</h2>
        </div>
        <div className='flex-col third-width underlined'>
            <h1 className='center'>Jacob's Info</h1>
            <h2 className='center'>Git Hub</h2>
            <h2 className='center'>Linked In</h2>
            <h2 className='center'>Claim Academy</h2>
        </div>
    </div>
)
}
export default Footer