import logo from '../../../assets/images/dotgrid_logo.png'
import classes from './logo.module.css'
import { useNavigate } from 'react-router-dom'

export const Logo=({style})=>{

    // display the logo
    const navigate = useNavigate()
    return (
        <div className={classes.logo__container} onClick={()=>navigate('/')}>
            <div className={`${classes.logo__wrapper} ${style}`}>
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}