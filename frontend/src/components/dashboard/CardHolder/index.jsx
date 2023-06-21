import {FaNfcSymbol, } from 'react-icons/fa'
import './index.css'
import {DashCard } from './DashCard'

export const CardHolder=()=>{
    return (
        <div className='card_container'>
            <div className='card_container_wrapper'>
                <DashCard metric={'23,000'} title={'Bitcoin'} icon={"fa-solid fa-bitcoin-sign"}/>
                <DashCard metric={'23,000'} title={'Stock'} icon={"fa-solid fa-dollar-sign"}/>
                <DashCard metric={'23,000'} title={'Future'} icon={"fa-solid fa-oil-well"}/>
            </div>
        </div>
    )
}