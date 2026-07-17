import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loadingContainer">
        <h2>Loading Customers...</h2>
      </div>
    );
  }

  return (
    <div className="customerPage">
      {/* Search */}

      <div className="searchSection">
        <div className="searchBox">
          🔍

          <input
            type="text"
            placeholder="Search Customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Statistics */}

      <div className="topCards">
        <div className="topCard">
          <h2>{customers.length}</h2>
          <p>Total Customers</p>
        </div>

        <div className="topCard">
          <h2>₹12.8 Cr</h2>
          <p>Total Deposits</p>
        </div>

        <div className="topCard">
          <h2>₹5.2 Cr</h2>
          <p>Total Loans</p>
        </div>

        <div className="topCard">
          <h2>98%</h2>
          <p>Customer Satisfaction</p>
        </div>
      </div>

      <h2 className="customerHeading">ī
        Customer Directory
      </h2>

      <div className="customerGrid">

        {filteredCustomers.map((customer) => (

          <div className="customerCard" key={customer.id}>

            {/* Avatar */}

            <div className="customerTop">

              <img
                src={`https://i.pravatar.cc/150?img=${customer.id + 10}`}
                alt={customer.name}
                className="profileImage"
              />

              <div>

                <h3>{customer.name}</h3>

                <span className="status active">

                  ✓
                  Active

                </span>

              </div>

            </div>

            {/* Email */}

            <div className="customerInfo">

              <p>

                ✉
                {customer.email}

              </p>

              <p>

                📞
                {customer.phone}

              </p>

              <p>

                🏢
                {customer.company.name}

              </p>

            </div>

            {/* Bank Details */}

            <div className="accountInfo">

              <div>

                <span>Account Type</span>

                <h4>Savings</h4>

              </div>

              <div>

                <span>Balance</span>

                <h4>
                  ₹
                  {(customer.id * 245630).toLocaleString()}
                </h4>

              </div>

            </div>

            {/* Button */}

            <Link
              to={`/customers/${customer.id}`}
              className="viewProfileBtn"
            >
              👁️
              View Full Profile
            </Link>

          </div>

        ))}

      </div>
    </div>
  );
}

export default CustomerList;