import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="side-bar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h1 className='text-center font-bold text-2xl'>My Dashboards</h1>

        <Outlet />
      </div>
      <div className="drawer-side">
        <label for="side-bar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
          <li><Link to='/dashboard/myreview'>Sidebar Item 2</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;