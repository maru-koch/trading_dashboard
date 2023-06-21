import { SideBar, DashHeader } from "../../components/dashboard"
import './index.css'
export const Dashboard=({children})=>{
    return (
        <div className="overview">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="content">
                <div className="header">
                    <DashHeader/>
                </div>
                <div className="dashboard_sub">
                {/* Index | Users | UserDetail */}
                    {children}
                </div>
            </div>
        </div>
    )
}

