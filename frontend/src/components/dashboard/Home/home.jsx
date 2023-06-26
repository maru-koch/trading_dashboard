import { useState, useEffect } from "react";

import { AdminIndex} from "./Admin/admin-index";
import { Trader } from "./Trader/trader"
import './home.css'
export const Home=()=>{

    const [user, setUser] = useState({name:'amed', is_admin:true})

    return (
        <div className={'home'}>
            {user.is_admin?<AdminIndex/>:<Trader/>} 
        </div>
    )
}