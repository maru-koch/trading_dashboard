import React from 'react';
import { DashHeader, SideBar, Text, Welcome, DataTable, DashCardHolder} from '../../components';
import './index.css';


export const OverviewPage = () => (
  <div className="overview">
      <div className="sidebar">
          <SideBar />
      </div>
      <div className="content">
          <div className="header">
              <DashHeader/>
          </div>
          <div className="welcome">
              <Welcome />
          </div>
          <DashCardHolder/>
            <div className="head-text">
                <Text>Recent Pickups</Text>
                <div className="right-text">
                    <Text>Your Total Points</Text>
                  &nbsp;1769
                </div>
            </div>
            <div className="dashboard__datatable">
            <DataTable/>
          </div>
      </div>
  </div>
);
