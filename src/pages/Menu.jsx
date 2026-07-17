function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "Pizza",
      price: "₹299",
      rating: "4.8 ⭐",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
    {
      id: 2,
      name: "Chicken Burger",
      category: "Burger",
      price: "₹199",
      rating: "4.7 ⭐",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    },
    {
      id: 3,
      name: "Chicken Biryani",
      category: "Biryani",
      price: "₹249",
      rating: "4.9 ⭐",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600",
    },
    {
      id: 4,
      name: "Veg Noodles",
      category: "Chinese",
      price: "₹179",
      rating: "4.6 ⭐",
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600",
    },
    {
      id: 5,
      name: "French Fries",
      category: "Snacks",
      price: "₹129",
      rating: "4.5 ⭐",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
    },
    {
      id: 6,
      name: "Chocolate Cake",
      category: "Dessert",
      price: "₹220",
      rating: "4.9 ⭐",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    },
    {
      id: 7,
      name: "Paneer Tikka",
      category: "Starter",
      price: "₹259",
      rating: "4.8 ⭐",
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600",
    },
    {
      id: 8,
      name: "Cold Coffee",
      category: "Beverage",
      price: "₹149",
      rating: "4.7 ⭐",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    },
  ];

  return (
    <div className="menu-page">

      <section className="page-banner">
        <h1>🍴 Our Menu</h1>
        <p>
          Choose from a wide variety of delicious dishes prepared by our
          trusted restaurant partners.
        </p>
      </section>

      <section className="menu-grid">

        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="menu-content">

              <h2>{item.name}</h2>

              <p>
                <strong>Category:</strong> {item.category}
              </p>

              <p>
                <strong>Rating:</strong> {item.rating}
              </p>

              <h3>{item.price}</h3>

              <button className="add-cart-btn">
                🛒 Add to Cart
              </button>

            </div>

          </div>
        ))}

      </section>

      <section className="special-offer">

        <h2>🔥 Today's Special Offer</h2>

        <p>
          Get <strong>30% OFF</strong> on orders above
          <strong> ₹599 </strong>
          using coupon code
          <span> FOOD30 </span>
        </p>

      </section>

    </div>
  );
}

export default Menu;