import { SideBar, DashHeader } from "../../components/dashboard"
import { Outlet } from "react-router-dom"
import './index.css'

export const Dashboard=({user})=>{
    return (
        <div className="dashboard">
            <div className="sidebar">
                <SideBar user={user}/>
            </div>
            <div className="content">
                <DashHeader/>
                <Outlet/> 
            </div>
        </div>
    )
}

