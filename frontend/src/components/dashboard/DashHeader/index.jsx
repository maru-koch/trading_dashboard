import './style.css';
import {useSelector} from 'react-redux'
import { Text, SearchBar, Button } from '../../../components/elements';

export const DashHeader = () => {
  // const { user } = useSelector(state => state.auth)
  return (
    <div className="dash-navbar">
      <Text text={'Dashboard'} size={20} weight={20}/>
      <SearchBar/>
      <Button text={'Deposition'} round btnStyle={{backgroundColor:'green'}}/>
    </div>
    )
};
  