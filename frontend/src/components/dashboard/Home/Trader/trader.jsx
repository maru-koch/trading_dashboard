import { CardHolder } from "../../CardHolder";
import {Table, Graph, Interval, Metrics} from '../../../elements'



export const Trader = () => (
    <div className="trader">
        <section>
            <div style={{display:"grid", gridTemplateColumns:'7fr 3fr'}}>
                <div> 
                    <CardHolder/>
                    <Graph/>
                </div>
                
                <div>
                    <p></p>
                </div>
            </div>
            
            {/* <Table/> */}
        </section>
    </div>
  );
  