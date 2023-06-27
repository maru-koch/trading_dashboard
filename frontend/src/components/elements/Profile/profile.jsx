
import './profile.css'
import { Button } from "../Button"

export const Profile=({profile})=>{
    console.log(profile.fund)
    return(
        <div className="profile-container">
            <div className="profile-wrapper">
                <div className="profile-info-card">
                    <div className="profile-image-card">
                        {/* <img src={"../../../assets/profile.jpeg"} alt="trader's photo"/> */}
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="profile-bio">
                        <p className="profile-name">{profile.first_name} {profile.last_name}</p>
                        <p>{profile.email}</p>
                        <div className="profile-contact">
                            <div>
                                <p>09012658224</p>
                            </div>
                            <div className="hv"></div>
                            <div>
                                <p>Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-fund-container">
                    <div className="profile-fund">
                        <p>Account Balance</p>
                        <h2>$ {profile?.fund?.amount}</h2>
                    </div>
                    
                    <div>
                        <Button round text={'Freeze Fund'} size={12}/>
                    </div>
                </div>
            </div>
        </div>
    )
}