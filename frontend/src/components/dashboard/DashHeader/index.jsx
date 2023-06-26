import './style.css';
import {useSelector} from 'react-redux'
import { Text, SearchBar, Button } from '../../../components/elements';

export const DashHeader = ({user}) => {
  return (
    <div className="dash-navbar">
      <Text text={'Dashboard'} size={20} weight={20}/>
      <SearchBar/>
      <div className='header-container'>
        <h3 className='initial'>{`${user.first_name[0].toUpperCase()+user.last_name[0].toUpperCase()}`}</h3>
        <i className='fas fa-bell'></i>
        <Button text={'Deposit'} btnStyle={{backgroundColor: 'transparent'}}/>
      </div>
     
    </div>
    ) 
};
  