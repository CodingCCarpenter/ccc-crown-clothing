import React from "react";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      src: "urlHere"
    },
    {
      id: 2,
      title: "Jackets",
      src: "tba"
    },
    {
      id: 3,
      title: "Sneakers",
      src: "tba"
    },
    {
      id: 4, 
      title: "Womens",
      src: "tba"
    },
    {
      id: 5,
      title: "Mens",
      src: "tba"
    }
  ]
  return (
    <div className="categories-container">
      <div className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
          <h2>
            Hats
          </h2>
          <p>
            Shop Now
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
