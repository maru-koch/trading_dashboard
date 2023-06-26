
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {Transactions, Profile} from '../../elements'

export const TraderDetail = () => {

    const [trader, setTrader] =useState({})

    const {traders}=useSelector(state=>state.auth)

    const trader_id = useParams()
    
    useEffect(()=>{
        for (let trader_ of traders){
            console.log("LOOP: ", trader_)
            if (trader_.id === trader_id['id']){
                setTrader(trader_)
                console.log("TRADER: ", traders)
            }
        }
    }, [trader_id])
    console.log("TRADES:",trader.trades)
    const headers = ['Pair', 'Ask Price', 'Sale Price', 'Profit/Lost', 'Balance', 'Date']

    return (
        <div className='trader-detail-container'>
            <div className='trader-detail-wrapper'> 
                <Profile profile = {trader}/> 
                <Transactions title={'Trade History'} data={trader.trades} headers={headers}/> 
            </div>
        </div>
  )};
  