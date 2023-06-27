import { useState, useEffect } from "react";

import { AdminIndex} from "./Admin/admin-index";
import { Trader } from "./Trader/trader"
import './home.css'
import { useSelector } from "react-redux";
export const Home=()=>{

    const [loggedInUser, setLoggedInUser] = useState({})

    const {user} = useSelector(state=>state.auth)

    console.log("LOGGED IN USER:", user)

    useEffect(()=>{
        setLoggedInUser(user)
    }, [])

    console.log("IS ADMIN?", user.is_trader)
    return (
        <div className={'home'}>
            {!user.is_trader === true? <AdminIndex/>:<Trader trader={loggedInUser}/>} 
        </div>
    )
}