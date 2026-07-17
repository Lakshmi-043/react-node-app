function Profile() {
  const user = {
    name: "Sai Lakshmi",
    email: "sailakshmi@gmail.com",
    phone: "+91 98765 43210",
    location: "Hyderabad, India",
    memberSince: "January 2026",
    orders: 28,
    favoriteFood: "Chicken Biryani",
    wallet: "₹1,250",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  };

  return (
    <div className="profile-page">

      {/* Banner */}
      <section className="page-banner">
        <h1>👤 My Profile</h1>
        <p>
          Manage your personal information, delivery details, and account
          preferences.
        </p>
      </section>

      {/* Profile Card */}
      <div className="profile-container">

        <div className="profile-card">

          <img
            src={user.profileImage}
            alt={user.name}
            className="profile-image"
          />

          <h2>{user.name}</h2>

          <p className="member-text">
            FoodExpress Premium Member
          </p>

          <button className="edit-profile-btn">
            Edit Profile
          </button>

        </div>

        {/* User Details */}

        <div className="profile-details">

          <h2>Account Information</h2>

          <div className="detail-row">
            <span>📧 Email</span>
            <strong>{user.email}</strong>
          </div>

          <div className="detail-row">
            <span>📱 Mobile</span>
            <strong>{user.phone}</strong>
          </div>

          <div className="detail-row">
            <span>📍 Location</span>
            <strong>{user.location}</strong>
          </div>

          <div className="detail-row">
            <span>📅 Member Since</span>
            <strong>{user.memberSince}</strong>
          </div>

          <div className="detail-row">
            <span>❤️ Favorite Food</span>
            <strong>{user.favoriteFood}</strong>
          </div>

          <div className="detail-row">
            <span>💰 Wallet Balance</span>
            <strong>{user.wallet}</strong>
          </div>

        </div>

      </div>

      {/* Statistics */}

      <section className="profile-stats">

        <div className="stat-card">
          <h2>{user.orders}</h2>
          <p>Total Orders</p>
        </div>

        <div className="stat-card">
          <h2>15</h2>
          <p>Favorite Restaurants</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Coupons Available</p>
        </div>

        <div className="stat-card">
          <h2>4.9 ⭐</h2>
          <p>Customer Rating</p>
        </div>

      </section>

      {/* Quick Actions */}

      <section className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="actions-grid">

          <button className="action-btn">
            📍 Manage Addresses
          </button>

          <button className="action-btn">
            💳 Payment Methods
          </button>

          <button className="action-btn">
            🎁 My Coupons
          </button>

          <button className="action-btn">
            ❤️ Favorite Restaurants
          </button>

          <button className="action-btn">
            🔔 Notifications
          </button>

          <button className="action-btn logout">
            🚪 Logout
          </button>

        </div>

      </section>

    </div>
  );
}

export default Profile;