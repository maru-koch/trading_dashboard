import { useState, useEffect } from "react";

import { Admin} from "./Admin/admin";
import { Trader } from "./Trader/trader"
import './home.css'
export const Home=()=>{

    const [user, setUser] = useState({name:'amed', is_admin:true})

    return (
        <div className={'home'}>
            {user.is_admin?<Admin/>:<Trader/>} 
        </div>
    )
}