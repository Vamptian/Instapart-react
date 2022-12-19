
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
            <div className="flex-col background space-down1 fill">
                <div className="flex-row welcome  center">
                   
                </div>
            </div>
            <div className="welcome center">
                    <h1 className="welcome-text">Welcome to Insta-Part</h1>
            </div>
            <div className="flex-col welcome   white body center ">
                <div className="flex-row">
                    <h1 className="h">Insta-part</h1>
                </div>
            </div>
            <div className="flex-col welcome center white-background">
                <div className="flex-row center">
                    <h1 className="h title">BUY</h1>
                </div>
                <div className="flex-col half-width center">
                    <h1 className="">Our goal is to connect small shops with part venders by creating a well known part exchange</h1>
                </div>
            </div>
            <div className="flex-row welcome white center">
                <div className="flex-col half-width">
                    <h1 className="h title ">SELL</h1>
                    <h1 className="">Whether your inventory is big or small, Instapart lets you venture out and start selling your parts to shops and dealerships. </h1>
                </div>
            </div>
            <div className="flex-col welcome center white-background">
                <div className="flex-row center">
                    <h1 className="h title">DELIVER</h1>
                </div>
                <div className="flex-col half-width center">
                    <h1 className="">Our goal is to get you quality parts quick. Insta-Part salvage specialists will search the yards for you, or simply pick up your orders letting you save much needed time in the shop</h1>
                </div>
            </div>
        </div>
    )
}

export default Home