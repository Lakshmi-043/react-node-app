import React from "react";

function EmployeeTable({ employees }) {
  const departments = [
    "Human Resources",
    "Finance",
    "Marketing",
    "Sales",
    "IT",
    "Operations",
  ];

  const profileImages = {
    1: "women/44", // Leanne Graham
    2: "men/32", // Ervin Howell
    3: "women/68", // Clementine Bauch
    4: "women/45", // Patricia Lebsack
    5: "women/20", // Chelsey Dietrich
    6: "women/52", // Mrs. Dennis Schulist
    7: "men/55", // Kurtis Weissnat
    8: "men/61", // Nicholas Runolfsdottir V
    9: "women/70", // Glenna Reichert
    10: "women/75", // Clementina DuBuque
  };

  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => {
            const department =
              departments[(employee.id - 1) % departments.length];

            const status =
              employee.id % 2 === 0 ? "Active" : "On Leave";

            return (
              <tr key={employee.id}>
                <td>
                  <img
                    src={`https://randomuser.me/api/portraits/${profileImages[employee.id]}.jpg`}
                    alt={employee.name}
                    className="employee-avatar"
                  />
                </td>

                <td>{employee.name}</td>
                <td>{employee.username}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>

                <td>
                  <a
                    href={`https://${employee.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {employee.website}
                  </a>
                </td>

                <td>{department}</td>

                <td>
                  <span
                    className={
                      status === "Active"
                        ? "status active"
                        : "status leave"
                    }
                  >
                    {status}
                  </span>
                </td>

                <td>
                  <button className="view-btn">
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;