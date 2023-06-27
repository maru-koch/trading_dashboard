import { CardHolder } from "../../CardHolder";
import {ListItem, Loader} from '../../../elements'
import './admin.css'
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_ACTIONS } from "../../../../store_/auth_slice";
import { useEffect, useState, useRef } from "react"
import axios from "axios"



export const AdminIndex = () => {

    const {loading, traders} = useSelector(state=>state.auth)
  
    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(AUTH_ACTIONS.generateTrades())
        setTimeout(()=>{
            dispatch(AUTH_ACTIONS.getTraders())
        }, 7000)

    }, [])

  return (
    <div className="trader">
        <section>
            <div style={{display:"grid", gridTemplateColumns:'7fr 3fr'}}>
                <div> 
                    <Outlet/>
                </div>
                <aside className="aside">
                    <h3>Traders</h3>
                    <div className="side">
                        {loading?<Loader width={50} height={50}/>:traders.map((trader, idx)=><ListItem key={idx} icon={"fa fa-chevron-right"} traderInfo={trader}/>)}
                    </div>
                </aside>
            </div>
        </section>
    </div>
)
}
   