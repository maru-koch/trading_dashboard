import { CardHolder } from "../../CardHolder";
import {Table, Graph, Interval, Metrics, MetricHolder} from '../../../elements'



export const Trader = ({trader}) => (
    <div className="trader">
        <section>
            <div style={{display:"grid", gridTemplateColumns:'7fr 3fr'}}>
                <div> 
                    <CardHolder/>
                    <Graph trader={trader}/>
                </div>
                
                <div>
                    <p></p>
                </div>
            </div>
            
            {/* <Table/> */}
        </section>
    </div>
  );
  