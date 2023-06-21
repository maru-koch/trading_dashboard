import { DashCardHolder } from "../../DashCardHolder";
import {Table, Graph} from '../../../elements'



export const Trader = () => (
    <div className="trader">
        <section>
            <Graph/>
            <DashCardHolder/>
            {/* <Table/> */}
        </section>
    </div>
  );
  