function Restaurants() {
  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      cuisine: "Italian, Pizza",
      rating: "4.8 ⭐",
      delivery: "25 mins",
      offer: "50% OFF",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
    {
      id: 2,
      name: "Burger House",
      cuisine: "Fast Food, Burgers",
      rating: "4.7 ⭐",
      delivery: "20 mins",
      offer: "Free Delivery",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    },
    {
      id: 3,
      name: "Biryani Express",
      cuisine: "Hyderabadi, Indian",
      rating: "4.9 ⭐",
      delivery: "30 mins",
      offer: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600",
    },
    {
      id: 4,
      name: "South Spice",
      cuisine: "South Indian",
      rating: "4.6 ⭐",
      delivery: "18 mins",
      offer: "20% OFF",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    },
    {
      id: 5,
      name: "Chinese Wok",
      cuisine: "Chinese",
      rating: "4.5 ⭐",
      delivery: "22 mins",
      offer: "Buy 1 Get 1",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
    },
    {
      id: 6,
      name: "Sweet Delight",
      cuisine: "Desserts & Ice Cream",
      rating: "4.9 ⭐",
      delivery: "15 mins",
      offer: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",
    },
  ];

  return (
    <div className="restaurants-page">

      <section className="page-banner">
        <h1>🍽 Our Partner Restaurants</h1>
        <p>
          Discover top-rated restaurants near you with exciting offers,
          delicious food, and lightning-fast delivery.
        </p>
      </section>

      <section className="restaurant-list">

        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>

            <img
              src={restaurant.image}
              alt={restaurant.name}
            />

            <div className="restaurant-info">

              <h2>{restaurant.name}</h2>

              <p>
                <strong>Cuisine:</strong> {restaurant.cuisine}
              </p>

              <p>
                <strong>Rating:</strong> {restaurant.rating}
              </p>

              <p>
                <strong>Delivery:</strong> {restaurant.delivery}
              </p>

              <span className="offer-badge">
                {restaurant.offer}
              </span>

              <button className="view-menu-btn">
                View Menu
              </button>

            </div>

          </div>
        ))}

      </section>

      <section className="restaurant-benefits">

        <div className="benefit-card">
          🚀
          <h3>Fast Delivery</h3>
          <p>Food delivered within 30 minutes.</p>
        </div>

        <div className="benefit-card">
          ⭐
          <h3>Top Rated</h3>
          <p>Only highly rated restaurants are listed.</p>
        </div>

        <div className="benefit-card">
          🎁
          <h3>Exclusive Offers</h3>
          <p>Daily discounts and exciting combo deals.</p>
        </div>

      </section>

    </div>
  );
}

export default Restaurants;