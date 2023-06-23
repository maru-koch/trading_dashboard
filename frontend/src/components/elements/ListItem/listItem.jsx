
import PropTypes from 'prop-types';
import classes from './listItem.module.css'

export const ListItem = ({icon="fa fa-chevron-right", user_name, earnings}) =>{

    // creates a single list Item e.g > 2 Devices
    // where '>' is the chevron icon and the item is '2 Devices'
    
    return (
        <li className ={classes.listItem__container}>
            <i className={icon}></i>
            <p>{user_name}</p>
            <p className={classes.amount}>{earnings}</p>
        </li>
    )
}


ListItem.propTypes = {
    icon: PropTypes.string,
    items: PropTypes.string
}