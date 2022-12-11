
import { useEffect, useState } from "react"
import axios from "axios"
import '../../css/components/pages/home.css'


const Home = (props) => {

    
    // useEffect(() => {

    //     if (localStorage.getItem("email")) {
    //         axios.get(`http://localhost:8080/getUserByEmail/${localStorage.getItem("email")}`)
    //             .then((response) => {
    //                 console.log(response.data)
    //                 props.setUser(response.data)
    //             })
    //             .catch((e) => {
    //                 console.log(e)
    //             })
    //     }
    // }, [props.user])

    return (
        <div className="flex-col">
            <div className="flex-col background welcome fill">
                <div className="flex-row center">
                    <h1>Welcome to InstaPart</h1>
                </div>

            </div>
            <div className="flex-col home-space center background-beige">
                
                    <h1 className="give-border">This will be some random title</h1>
                    <p className="take-width">this will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we do</p>       
            </div>
            <div className="flex-row background-beige">
                <div className="flex-col half-width center">
                    <h1 className="give-border background-teal">Buy</h1>
                    <p className="take-width give-border background-teal">this will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we do</p>       

                </div>
                <div className="flex-col half-width center ">
                    <h1 className="give-border background-teal">Sell</h1>
                    <p className="take-width give-border background-teal">this will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we dothis will be all about our website how you can buy and sell car parts and give a breif description about what we do</p>       

                </div>
            </div>
        </div>
    )
}

export default Home