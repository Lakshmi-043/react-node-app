function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      restaurant: "Pizza Palace",
      quantity: 1,
      price: 299,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
    {
      id: 2,
      name: "Chicken Burger",
      restaurant: "Burger House",
      quantity: 2,
      price: 199,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    },
    {
      id: 3,
      name: "Cold Coffee",
      restaurant: "Cafe Delight",
      quantity: 1,
      price: 149,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = 40;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + gst;

  return (
    <div className="cart-page">

      <section className="page-banner">
        <h1>🛒 My Cart</h1>
        <p>Review your selected food items before placing the order.</p>
      </section>

      <div className="cart-container">

        {/* Cart Items */}

        <div className="cart-items">

          {cartItems.map((item) => (
            <div className="cart-card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">

                <h2>{item.name}</h2>

                <p>
                  <strong>Restaurant:</strong> {item.restaurant}
                </p>

                <p>
                  <strong>Price:</strong> ₹{item.price}
                </p>

                <div className="quantity-box">
                  <button>-</button>

                  <span>{item.quantity}</span>

                  <button>+</button>
                </div>

              </div>

              <div className="cart-total">

                <h3>
                  ₹{item.price * item.quantity}
                </h3>

                <button className="remove-btn">
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Bill Summary */}

        <div className="bill-summary">

          <h2>Bill Summary</h2>

          <div className="bill-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="bill-row">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <div className="bill-row">
            <span>GST (5%)</span>
            <span>₹{gst}</span>
          </div>

          <hr />

          <div className="bill-row total">

            <strong>Total</strong>

            <strong>₹{total}</strong>

          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

        </div>

      </div>

      {/* Delivery Information */}

      <section className="delivery-info">

        <div className="info-card">
          🚚
          <h3>Fast Delivery</h3>
          <p>Estimated delivery within 30 minutes.</p>
        </div>

        <div className="info-card">
          💳
          <h3>Secure Payment</h3>
          <p>UPI, Credit Card, Debit Card & Cash on Delivery.</p>
        </div>

        <div className="info-card">
          🎁
          <h3>Special Offers</h3>
          <p>Apply coupons during checkout and save more.</p>
        </div>

      </section>

    </div>
  );
}

export default Cart;