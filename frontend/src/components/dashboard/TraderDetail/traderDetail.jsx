
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {TradeHistory, Profile} from '../../elements'

export const TraderDetail = () => {

    const [trader, setTrader] =useState({})

    const {traders} = useSelector(state=>state.auth)

    const trader_id = useParams()
    
    useEffect(()=>{
        for (let trader_ of traders){
            console.log("LOOP: ===>", trader_)
            if (trader_.id === trader_id['id']){
                setTrader(trader_)
            }
        }

    }, [trader_id, traders])

 
    return (
        <div className='trader-detail-container'>
            <div className='trader-detail-wrapper'> 
                <Profile profile = {trader}/> 
                <TradeHistory history={trader.trades}/>
            </div>
        </div>
  )};
  