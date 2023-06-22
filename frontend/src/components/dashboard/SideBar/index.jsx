import React from 'react';
import { Text } from '../../elements';
import './index.css';

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { AUTH_ACTIONS } from '../../../store_/auth_slice';

import { ReactComponent as Grid } from './images/grid.svg';
import { ReactComponent as Wallet } from './images/wallet.svg';
import { ReactComponent as Number } from './images/num.svg';
import { ReactComponent as History } from './images/accountdisc.svg';
import { ReactComponent as Payment } from './images/payment.svg';
import { ReactComponent as Newsfeeds } from './images/newsfeed.svg';
import { ReactComponent as Logout } from './images/logout.svg';
import logo from '../../../assets/logo.png';
;
export const SideBar = () => {

  const { logOutUser } = AUTH_ACTIONS
  const dispatch = useDispatch();

  const {user} = useSelector(state=>state.auth)

  const logout = () => {
    dispatch(logOutUser());
  };

  return (

    <div className={"sidePanel"}>

      <div className="logo" >
        <div className="logo__img" id ="breathing-logo">
             <img src={logo} alt="ft9ja logo" />
        </div>
      </div>

      <div className="side-bar">
        {true?
         <div>
         <div  className="box1 box">
           <Grid />
           <Text size={14} className="containerText">Traders</Text>
         </div>
         <div className="box">
           <Wallet />
           <Text size={14} >Request</Text>
         </div>
         <div className="box">
           <Newsfeeds />
           <Text size={14} >Transfer</Text>
         </div>
         <div className="box">
           <Payment />
           <Text size={14} >Transactions</Text>
         </div>
         <div className="box">
           <History/>
           <Text >History</Text>
           {/* <Num num ={3}/> */}
         </div>
       </div>

        :
        
        <div>
          <div  className="box1 box">
            <Grid />
            <Text size={14} className="containerText">Portfolio</Text>
          </div>
          <div className="box">
            <Wallet />
            <Text size={14} >Fund</Text>
          </div>
          <div className="box">
            <Newsfeeds />
            <Text size={14} >Transfer</Text>
          </div>
          <div className="box">
            <Payment />
            <Text size={14} >Analytics</Text>
          </div>
          <div className="box">
            <Number/>
            <Text size={14} >Open Trades</Text>
            {/* <Num num ={3}/> */}
          </div>
        </div>
        }
      </div>
     
      <hr />
      {/* <div className="space" /> */}

      <button type="button" className="box remove-btn-prop" onClick={()=>logout()}>
        <Text size={12} >Log Out</Text>
        <Logout className="log"/>
      </button>
      <div className="box">
        <Text size={12} text="Help & Support" color="green" />
      </div>
    </div>
  );
};
