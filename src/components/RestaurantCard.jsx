function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">

      <div className="restaurant-image">
        <img
          src={restaurant.image}
          alt={restaurant.name}
        />

        <span className="delivery-time">
          🚴 {restaurant.delivery}
        </span>
      </div>

      <div className="restaurant-content">

        <h3>{restaurant.name}</h3>

        <p className="restaurant-cuisine">
          {restaurant.cuisine}
        </p>

        <div className="restaurant-info">

          <span className="rating">
            ⭐ {restaurant.rating}
          </span>

          <span className="delivery">
            ⏱ {restaurant.delivery}
          </span>

        </div>

        <button className="order-btn">
          Order Now
        </button>

      </div>

    </div>
  );
}

export default RestaurantCard;