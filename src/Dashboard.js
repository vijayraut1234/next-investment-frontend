
// Dashboard.js

import DashMenuBar from "./DashMenuBar";
import "./Dashboard.css";
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <DashMenuBar />

      <nav className="dashboard-navbar">
        <Link to="/dashboard/home" className="Dashboard-button"> Home</Link>
        <Link to="/dashboard/stock" className="Dashboard-button"> Stock</Link>
        {/* <Link to="/dashboard/mutualfund" className="Dashboard-button">Mutual Fund</Link>
        <Link to="/dashboard/sip" className="Dashboard-button">💸 SIP</Link> */}
        <Link to="/dashboard/transaction" className="Dashboard-button"> Transaction</Link>
      </nav>

      <div className="dashboard-content">
         <Outlet />  
      </div>
    </div>
  );
}

export default Dashboard;
