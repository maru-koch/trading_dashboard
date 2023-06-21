import { Button, Text } from '../../elements';
import { useSelector} from 'react-redux'

import './style.css';

export const Welcome = () => {

 const { user } = useSelector(state => state.auth)
 return (
    <div className="intro_body">
      <Text size={16} weight={450}>
        <span style={{padding:"20px"}}>Welcome {user.first_name}! </span>
        We’re excited to have you here.
      </Text>
      <Button round btnType="secondary">
        <Text size={14}> Request A Device </Text>
      </Button>
    </div>
 )
}
 
