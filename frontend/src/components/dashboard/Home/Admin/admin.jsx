import {MetricPanel, TotalPanel, Transactions} from '../../../elements'
import { data } from "../../../elements/Transactions/data";
import './admin.css'


export const Admin = () => {
    const theader = ['s/n', 'username', 'type', 'amount', 'status', 'date']
    return (
            <div>
                <div> 
                    <MetricPanel/>
                    <TotalPanel/>
                    <Transactions data={data} theader={theader}/>
                </div>
            </div>
    )
}
  