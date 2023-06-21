import { useState, useEffect } from "react";

import { Admin} from "./Admin/admin";
import { Trader } from "./Trader/trader"

export const Home=()=>{

    const [user, setUser] = useState()

    return (
        <div>
            {user.is_admin?<Admin/>:<Trader/>}
        </div>
    )
}