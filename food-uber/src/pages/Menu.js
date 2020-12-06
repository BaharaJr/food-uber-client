import React, { useContext } from "react"
import { FoodContext } from "../context/FoodContext"

// components
import Banner from "../components/banner/Banner"
import Food from "../components/food/Food"

import "../styles/pages/menu.sass"

const Menu = () => {
  const [foods, setFoods] = useContext(FoodContext)
  console.log(setFoods)
  return (
    <div className="menu">
      <Banner>
        <div className="banner__headline">
          <h1>Our Menu</h1>
        </div>
      </Banner>
      <div className="food-showcase">
        <div className="container">
          <div className="showcase">
            {foods &&
              foods.data &&
              foods.data.map(({ name, id, food_image, description, cost }) => (
                <Food
                  key={id}
                  name={name}
                  id={id}
                  food_image={food_image}
                  description={description}
                  cost={cost}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu