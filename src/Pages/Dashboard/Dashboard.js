import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
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
          <li><Link to='/dashboard'>My Dashboard</Link></li>
          <li><Link to='/dashboard/myreview'>Review</Link></li>
          {admin && <>
            <li><Link to='/dashboard/allusers'>All Users</Link></li>
            <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
            <li><Link to='/dashboard/addDoctor'>Add New Doctor</Link></li>
          </>}
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;