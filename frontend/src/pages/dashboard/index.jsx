import { SideBar, DashHeader } from "../../components/dashboard"
import { Outlet } from "react-router-dom"
import './index.css'

export const Dashboard=()=>{
    return (
        <div className="dashboard">
            <div className="sidebar">
                <SideBar/>
            </div>
            <div className="content">
                <DashHeader/>
                <Outlet/> 
            </div>
        </div>
    )
}

