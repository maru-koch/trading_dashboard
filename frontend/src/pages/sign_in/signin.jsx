import React, {useState} from 'react';
import { Text, Input, Button, SectionImage } from '../../components/elements';
import { toast, ToastContainer} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_ACTIONS } from '../../store_/auth_slice';
import api from '../../api/endpoints'
import { validate } from './validation'
import logo from '../../assets/logo.png'
import './signin.css';

const initialValues = {
  'username':'',
  'password':''
}

export const SignInPage = (setAuth, setUser) => {

  const [form_data, setFormData] = useState(initialValues)
  const [error, setError] = useState({})

  const navigate = useNavigate()
  // auth is the name specified in the store
  const { loading } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  const { logInUser, login } = AUTH_ACTIONS;


    const onChangeHandler=(e)=>{
      setFormData({...form_data, [e.target.name]:e.target.value})
      
    }

    const onSubmitHandler = async (e) => {
      e.preventDefault();

      const errors = validate(form_data)
      
      if (errors){
            setError(errors)
        }

      dispatch(AUTH_ACTIONS.logInUser(form_data))
    }


  return (
    <main className ="signin__container">
      {/* <Loader open={loading}/> */}
        <div className ="signin__wrapper">
          <form style={{ position: 'relative' }} onSubmit={onSubmitHandler}>
            <div className="signin-wrapper email">
                <Text.Heading text="User name" size={16} weight={450} level={3} />
                <Input.FullRound name="username" type="email" placeholder="" onChange={onChangeHandler} />
                {error?<p className="error">{error.username}</p>:''}
            </div>
            <div className="signin-wrapper password">
                <Text.Heading text="Password" size={16} weight={450} level={3} />
                <Input.FullRound name="password" type="password" placeholder="" onChange={onChangeHandler} />
                {error?<p className="error" >{error.password}</p>:''}
            </div>
            <div className="signin-wrapper remember-me" >
                <Text.RememberMe navigate ={()=>navigate('/forgot-password')}/>
            </div>
            <div className="signin-wrapper button">
                {/* <Button type="submit" stretch text="Sign In" onClick={onSubmitHandler}>
                  <Spinner/>
                </Button> */}
                <Button type="submit" stretch text="Login"/>
            </div>
        </form>
        </div>
    </main>
  );
};
