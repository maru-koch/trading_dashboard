
import PropTypes from 'prop-types';
import classes from './listItem.module.css'
import { useNavigate } from 'react-router-dom';

export const ListItem = ({icon, traderInfo}) =>{

    const navigate = useNavigate()

    return (
        <li className ={classes.listItem__container} onClick={()=>navigate(`traders/${traderInfo.id}`)}>
            <i className={icon}></i>
            <p className={classes.listItem__name}>{traderInfo.first_name} {traderInfo.last_name}</p>
            <p className={classes.amount}>{traderInfo.amount}</p>
        </li>
    )
}


ListItem.propTypes = {
    icon: PropTypes.string,
    items: PropTypes.string
}