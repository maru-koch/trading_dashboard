
import './table.css'

export const Transactions=({title, data, theader})=>{
return(
    <main className="table__container">
        <section className ="table__wrapper">
            <div className='title-wrapper'>
                <h2>{title}</h2>
            </div>
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
        </section>
    </main>
)
}

