import React from "react";

function DashboardHeader({ totalEmployees }) {
  return (
    <div className="dashboard-header">
      <div className="header-content">
        <h1>👨‍💼 Employee Management Dashboard</h1>
        <p>Manage employee information efficiently</p>
      </div>

      <div className="header-card">
        <h2>{totalEmployees}</h2>
        <p>Total Employees</p>
      </div>
    </div>
  );
}

export default DashboardHeader;