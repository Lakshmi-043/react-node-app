function FoodCard({ food }) {
  return (
    <div className="food-card">

      <div className="food-image">
        <img
          src={food.image}
          alt={food.name}
        />

        <span className="food-tag">
          Popular
        </span>
      </div>

      <div className="food-content">

        <h3>{food.name}</h3>

        <div className="food-rating">
          ⭐ 4.8
        </div>

        <div className="food-footer">

          <h2>{food.price}</h2>

          <button className="add-btn">
            + Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default FoodCard;