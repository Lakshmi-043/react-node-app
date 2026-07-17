import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import employees from "./employee";

function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");

  const currentPage = Number(searchParams.get("page")) || 1;
  const recordsPerPage = 5;

  const roleList = [
    "All",
    ...new Set(employees.map((employee) => employee.role)),
  ];

  const cityList = [
    "All",
    ...new Set(employees.map((employee) => employee.city)),
  ];

  const filteredEmployees = employees.filter((employee) => {
    const searchMatch = employee.employeeName
      .toLowerCase()
      .includes(search.toLowerCase());

    const roleMatch =
      selectedRole === "All" ||
      employee.role === selectedRole;

    const cityMatch =
      selectedCity === "All" ||
      employee.city === selectedCity;

    return searchMatch && roleMatch && cityMatch;
  });

  const totalPages = Math.ceil(
    filteredEmployees.length / recordsPerPage
  );

  const startIndex =
    (currentPage - 1) * recordsPerPage;

  const currentEmployees = filteredEmployees.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setSearchParams({
        page: currentPage - 1,
      });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setSearchParams({
        page: currentPage + 1,
      });
    }
  };

  const handlePage = (page) => {
    setSearchParams({
      page: page,
    });
  };

  const availableEmployees = employees.filter(
    (employee) => employee.status === "Available"
  ).length;

  const totalCities = new Set(
    employees.map((employee) => employee.city)
  ).size;

  const totalRoles = new Set(
    employees.map((employee) => employee.role)
  ).size;

  const showingFrom =
    filteredEmployees.length === 0
      ? 0
      : startIndex + 1;

  const showingTo = Math.min(
    startIndex + recordsPerPage,
    filteredEmployees.length
  );
    return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">💼RecruitPro</div>

        <ul className="menu">
          <li>Home</li>
          <li>Jobs</li>
          <li>Companies</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}

      <div className="hero">
        <h1>Find Your Dream Employee</h1>

        <p>
          Connecting Top Companies with Skilled Professionals
        </p>
      </div>

      {/* Search & Filters */}

      <div className="filters">

        <input
          type="text"
          placeholder="🔍 Search Employee..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchParams({ page: 1 });
          }}
        />

        <select
          value={selectedRole}
          onChange={(e) => {
            setSelectedRole(e.target.value);
            setSearchParams({ page: 1 });
          }}
        >
          {roleList.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <select
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setSearchParams({ page: 1 });
          }}
        >
          {cityList.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

      </div>

      {/* Dashboard Cards */}

      <div className="cards">

        <div className="card">
          <h2>{filteredEmployees.length}</h2>
          <p>Total Employees</p>
        </div>

        <div className="card">
          <h2>{availableEmployees}</h2>
          <p>Available</p>
        </div>

        <div className="card">
          <h2>{totalCities}</h2>
          <p>Cities</p>
        </div>

        <div className="card">
          <h2>{totalRoles}</h2>
          <p>Roles</p>
        </div>

      </div>

      {/* Employee Count */}

      <div className="count">
        Showing <strong>{showingFrom}</strong> -
        <strong> {showingTo}</strong> of
        <strong> {filteredEmployees.length}</strong> Employees
      </div>

      {/* Employee Table */}

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Role</th>
          </tr>

        </thead>

        <tbody>

          {currentEmployees.length > 0 ? (

            currentEmployees.map((employee) => (

              <tr key={employee.id}>

                <td>{employee.id}</td>

                <td>{employee.employeeName}</td>

                <td>{employee.email}</td>

                <td>{employee.city}</td>

                <td>{employee.role}</td>

              </tr>

            ))

          ) : (

            <tr>

              <td colSpan="6">
                No Employees Found
              </td>

            </tr>

          )}

        </tbody>

      </table>

      {/* Pagination */}

      <div className="pagination">

        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          ◀ Previous
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => (

            <button
              key={index + 1}
              className={
                currentPage === index + 1
                  ? "activePage"
                  : ""
              }
              onClick={() =>
                handlePage(index + 1)
              }
            >
              {index + 1}
            </button>

          )
        )}

        <button
          onClick={handleNext}
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
        >
          Next ▶
        </button>

      </div>

      {/* Footer */}

      <footer className="footer">

        <h3>💼 CareerHub Job Portal</h3>

        <p>
          Connecting Companies with Skilled Professionals
        </p>

        <p>
          © 2026 CareerHub. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}
export default Jobs;