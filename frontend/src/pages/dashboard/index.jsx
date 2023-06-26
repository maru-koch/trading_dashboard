import { SideBar, DashHeader } from "../../components/dashboard"
import { Outlet } from "react-router-dom"
import './index.css'
import { useSelector } from "react-redux"

export const Dashboard=()=>{
    const {user} = useSelector(state=>state.auth)
    return (
        <div className="dashboard">
            <div className="sidebar">
                <SideBar user={user}/>
            </div>
            <div className="content">
                <DashHeader user={user}/>
                <Outlet/> 
            </div>
        </div>
    )
}

