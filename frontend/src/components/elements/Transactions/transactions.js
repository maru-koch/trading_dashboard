
import './table.css'

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

const Table=({data, theader})=>{
    return (
        <table className="table" cellSpacing={2}>
            <thead>
                {theader.map((item, index)=><th key={index}>{item}</th>)}
            </thead>
            <tbody>
                {data.map((row, idx)=>
                <tr>
                    <td>{idx + 1}</td>{Object.values(row).map((col, idx)=><td>{col}</td>)}
                </tr>
                )}
            </tbody>
        </table>
    )
}

export const Transactions=({title, data=[], theader})=>{
    return(
        <main className="table__container">
            <section className ="table__wrapper">
                <div className='title-wrapper'>
                    <h2>{title}</h2>
                </div>
                <div>
                    {data.length <= 0 ?<Blank/>:<Table data={data} theader={theader}/>}
                </div>
            </section>
        </main>
    )
}

