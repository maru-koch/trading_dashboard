import {DashCard } from '../../molecules/DashCard'


export const DashCardHolder=()=>{
    return (
        <div className="main-container">
            <div className="cards">
                <DashCard id={1} metric={200} title="DEVICES" icon="fa-computer"/>
                <DashCard id={2} metric={`200 KW`} title="ENERGY" icon="fa-bolt"/>
                <DashCard id={3} metric={200} title="USERS" icon="fa-user"/>
            </div>
        </div>
    )
}