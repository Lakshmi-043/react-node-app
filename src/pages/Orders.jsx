function Orders() {
  const orders = [
    {
      id: "#FD1001",
      restaurant: "Pizza Palace",
      item: "Margherita Pizza",
      date: "07 July 2026",
      amount: "₹299",
      status: "Delivered",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
    {
      id: "#FD1002",
      restaurant: "Burger House",
      item: "Chicken Burger Combo",
      date: "05 July 2026",
      amount: "₹399",
      status: "On the Way",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    },
    {
      id: "#FD1003",
      restaurant: "Biryani Express",
      item: "Chicken Biryani",
      date: "03 July 2026",
      amount: "₹249",
      status: "Preparing",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600",
    },
    {
      id: "#FD1004",
      restaurant: "Sweet Delight",
      item: "Chocolate Cake",
      date: "01 July 2026",
      amount: "₹220",
      status: "Delivered",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    },
  ];

  return (
    <div className="orders-page">

      {/* Banner */}
      <section className="page-banner">
        <h1>📦 My Orders</h1>
        <p>
          Track your food orders and view your complete order history.
        </p>
      </section>

      {/* Order Cards */}
      <section className="orders-container">

        {orders.map((order) => (
          <div className="order-card" key={order.id}>

            <img src={order.image} alt={order.item} />

            <div className="order-details">

              <h2>{order.item}</h2>

              <p>
                <strong>Restaurant:</strong> {order.restaurant}
              </p>

              <p>
                <strong>Order ID:</strong> {order.id}
              </p>

              <p>
                <strong>Date:</strong> {order.date}
              </p>

              <p>
                <strong>Amount:</strong> {order.amount}
              </p>

              <span
                className={
                  order.status === "Delivered"
                    ? "status delivered"
                    : order.status === "On the Way"
                    ? "status onway"
                    : "status preparing"
                }
              >
                {order.status}
              </span>

            </div>

            <div className="order-actions">

              <button className="track-btn">
                Track Order
              </button>

              <button className="reorder-btn">
                Reorder
              </button>

            </div>

          </div>
        ))}

      </section>

      {/* Order Summary */}
      <section className="order-summary">

        <div className="summary-card">
          <h2>4</h2>
          <p>Total Orders</p>
        </div>

        <div className="summary-card">
          <h2>2</h2>
          <p>Delivered</p>
        </div>

        <div className="summary-card">
          <h2>1</h2>
          <p>On the Way</p>
        </div>

        <div className="summary-card">
          <h2>1</h2>
          <p>Preparing</p>
        </div>

      </section>

    </div>
  );
}

export default Orders;