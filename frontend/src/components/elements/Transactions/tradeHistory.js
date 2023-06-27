
import './table.css'
const theader = ['s/n', 'pair', "Units", 'Ask Price','Sale Price', "Profit/Loss {$}", 'Comment', 'Balance ($)']

const Blank=()=>{
    <div className='blank-container'>
        <div className='black-wrapper'>
            <div className='blank-blank'>
                <i className='fas fa-settings'></i>
                <h3>No data to display</h3>
            </div>
        </div>
    </div>
}

const TableRow=({row, id})=>{
    return(
        <tr>
            <td>{id}</td>
            <td>{row.pair}</td>
            <td>{row.units}</td>
            <td>{row.open_price}</td>
            <td>{row.close_price}</td>
            <td>{row.amount}</td>
            <td className='comment' style={{color:`${row.comment==='loss'? 'red':'green'}`}}>{row.comment}</td>
            <td>{row.balance}</td>
        </tr>
    )
}
const Table=({history})=>{
    console.log("HISTORY:", history)
    return (
        <table className="table" cellSpacing={2}>
            <thead>
                {theader.map((item, index)=><th key={index}>{item}</th>)}
            </thead>
            <tbody>
                {history?.map((row, idx)=><TableRow row={row} id={idx + 1}/>)}
            </tbody>
        </table>
    )
}

export const TradeHistory=({history})=>{
    return(
        <main className="table__container">
            <section className ="table__wrapper">
                <div className='title-wrapper'>
                    <h2>Trade History</h2>
                </div>
                <div>
                    {false ?<Blank/>:<Table history={history}/>} 
                </div>
            </section>
        </main>
    )
}

