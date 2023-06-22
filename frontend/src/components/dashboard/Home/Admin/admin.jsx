import { CardHolder } from "../../CardHolder";
import {ListItem, MetricPanel, TotalPanel, Transactions} from '../../../elements'
import { data } from "../../../elements/Transactions/data";
import './admin.css'
export const Admin = () => (
    <div className="trader">
        <section>
            <div style={{display:"grid", gridTemplateColumns:'7fr 3fr'}}>
                <div> 
                    <MetricPanel/>
                    <TotalPanel/>
                    <Transactions/>
                </div>
                <aside className="aside">
                    <h3>Top Traders</h3>
                    <div className="side">
                        {data.map((trader)=><ListItem user_name={trader.username} earnings={trader.amount}/>)}
                    </div>
                </aside>
            </div>
            
            {/* <Table/> */}
        </section>
    </div>
  );
  