import '../../css/components/reusables/header.css'


const Footer = () => {

return(
    <div className='flex-row background-teal fill'>
        <div className='flex-col  third-width'>
            <h1 className='center'>Contact us</h1>
            <h2 className='center'>Email</h2>
            <h2 className='center'>Phone Number</h2>
        </div>
        <div className='flex-col center third-width'>
            <h1>Resources</h1>
            <h3>Spring Boot</h3>
            <h3> Eclipse</h3>
            <h3> VS Code</h3>
            <h3> React </h3>
            <h3> Post Man </h3>
            <h3> My Sequel Workbench</h3>
        </div>
        <div className='flex-col third-width'>
            <h1 className='center'>Jacob's Info</h1>
            <h2 className='center'> Git Hub</h2>
            <h2 className='center'> Linked In</h2>
            <h2 className='center'> Claim Academy</h2>
        </div>
    </div>
)
}
export default Footer