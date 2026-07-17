import RestaurantCard from "../components/RestaurantCard";
import FoodCard from "../components/FoodCard";

function Home() {
  const restaurants = [
    {
      name: "Pizza Palace",
      cuisine: "Italian, Pizza",
      rating: "4.8 ⭐",
      delivery: "25 mins",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
    },
    {
      name: "Burger House",
      cuisine: "Burgers, Fast Food",
      rating: "4.7 ⭐",
      delivery: "20 mins",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
    },
    {
      name: "Biryani Express",
      cuisine: "Hyderabadi, Indian",
      rating: "4.9 ⭐",
      delivery: "30 mins",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600"
    }
  ];

  const foods = [
    {
      name: "Cheese Pizza",
      price: "₹299",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
    },
    {
      name: "Chicken Burger",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
    },
    {
      name: "Chicken Biryani",
      price: "₹249",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600"
    },
    {
      name: "French Fries",
      price: "₹129",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600"
    }
  ];

  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-content">

          <h1>Delicious Food Delivered To Your Doorstep</h1>

          <p>
            Order food from your favourite restaurants with fast delivery,
            exciting offers, and live order tracking.
          </p>

          <button className="order-btn">
            Order Now
          </button>

        </div>

      </section>

      {/* Categories */}

      <section className="categories">

        <h2>Popular Categories</h2>

        <div className="category-list">

          <div className="category">
            🍕
            <p>Pizza</p>
          </div>

          <div className="category">
            🍔
            <p>Burger</p>
          </div>

          <div className="category">
            🍗
            <p>Chicken</p>
          </div>

          <div className="category">
            🍜
            <p>Noodles</p>
          </div>

          <div className="category">
            🥗
            <p>Healthy</p>
          </div>

          <div className="category">
            🍰
            <p>Desserts</p>
          </div>

        </div>

      </section>

      {/* Restaurants */}

      <section className="restaurants">

        <h2>Top Restaurants</h2>

        <div className="restaurant-grid">

          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              restaurant={restaurant}
            />
          ))}

        </div>

      </section>

      {/* Offer Banner */}

      <section className="offer-banner">

        <h2>🎉 Flat 50% OFF</h2>

        <p>
          On your first order above ₹499.
          Use Coupon Code:
          <strong> FOOD50 </strong>
        </p>

      </section>

      {/* Popular Foods */}

      <section className="foods">

        <h2>Popular Dishes</h2>

        <div className="food-grid">

          {foods.map((food, index) => (
            <FoodCard
              key={index}
              food={food}
            />
          ))}

        </div>

      </section>

      {/* Features */}

      <section className="features">

        <div className="feature-card">
          🚚
          <h3>Fast Delivery</h3>
          <p>Average delivery in 30 minutes.</p>
        </div>

        <div className="feature-card">
          💳
          <h3>Secure Payments</h3>
          <p>UPI, Cards, Wallets & Cash on Delivery.</p>
        </div>

        <div className="feature-card">
          ⭐
          <h3>Best Quality</h3>
          <p>Fresh food from trusted restaurants.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;