import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CustomerDetails() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCustomer(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="loading">Loading Customer Details...</h2>;
  }

  return (
    <div className="detailsPage">

      {/* Header */}

      <div className="profileCard">

        <img
          src={`https://i.pravatar.cc/180?img=${customer.id + 10}`}
          alt={customer.name}
          className="profilePic"
        />

        <div>

          <h1>{customer.name}</h1>

          <p className="customerId">
            Customer ID : SB00{customer.id}
          </p>

          <span className="activeBadge">
            🟢 Active Customer
          </span>

        </div>

      </div>

      {/* Debit Card */}

      <div className="bankCard">

        <div className="cardTop">

          <h3>Secure Bank</h3>

          💳

        </div>

        <h2>**** **** **** {4520 + customer.id}</h2>

        <div className="cardBottom">

          <div>
            <small>Card Holder</small>
            <h4>{customer.name}</h4>
          </div>

          <div>
            <small>Valid Thru</small>
            <h4>12/30</h4>
          </div>

        </div>

      </div>

      {/* Account Summary */}

      <div className="summaryGrid">

        <div className="summaryBox">
          👛
          <h2>₹ {(customer.id * 245630).toLocaleString()}</h2>
          <p>Available Balance</p>
        </div>

        <div className="summaryBox">
          🏦
          <h2>Savings</h2>
          <p>Account Type</p>
        </div>

        <div className="summaryBox">
          ✅
          <h2>Verified</h2>
          <p>KYC Status</p>
        </div>

        <div className="summaryBox">
          💳
          <h2>785</h2>
          <p>Credit Score</p>
        </div>

      </div>

      {/* Customer Details */}

      <div className="detailsGrid">
        <div className="detailItem">
            👤
            <div>
        <h4>Username</h4>
       <p>{customer.username}</p>
    </div>
   </div>
        <div className="detailItem">
          ✉
          <div>
            <h4>Email</h4>
            <p>{customer.email}</p>
          </div>
        </div>

        <div className="detailItem">
          📞
          <div>
            <h4>Phone</h4>
            <p>{customer.phone}</p>
          </div>
        </div>

        <div className="detailItem">
          🌐
          <div>
            <h4>Website</h4>
            <p>{customer.website}</p>
          </div>
        </div>

        <div className="detailItem">
          🏢
          <div>
            <h4>Company</h4>
            <p>{customer.company.name}</p>
          </div>
        </div>

        <div className="detailItem">
          📍
          <div>
            <h4>Address</h4>
            <p>
              {customer.address.street},
              {" "}
              {customer.address.city}
            </p>
          </div>
        </div>

        <div className="detailItem">
          🏦
          <div>
            <h4>Branch</h4>
            <p>Hyderabad Main Branch</p>
          </div>
        </div>

      </div>

      {/* Recent Transactions */}

      <div className="transactions">

        <h2>Recent Transactions</h2>

        <div className="transaction success">
          <span>Salary Credit</span>
          <strong>+ ₹45,000</strong>
        </div>

        <div className="transaction debit">
          <span>Electricity Bill</span>
          <strong>- ₹2,150</strong>
        </div>

        <div className="transaction debit">
          <span>ATM Withdrawal</span>
          <strong>- ₹10,000</strong>
        </div>

        <div className="transaction success">
          <span>Interest Credit</span>
          <strong>+ ₹1,850</strong>
        </div>

      </div>

      {/* Quick Actions */}

      <div className="actionButtons">

        <button>
          ➤
          Transfer Money
        </button>

        <button>
          👛
          Deposit
        </button>

        <button>
          ⬇
          Download Statement
        </button>

      </div>

      {/* Back */}

      <Link
        to="/customers"
        className="backButton"
      >
        ←
        Back to Customers
      </Link>

    </div>
  );
}

export default CustomerDetails;