import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { FoodContext } from "../../../context/FoodContext"

// components
import PageHeader from "../../../components/dashboard/PageHeader"

const EditFood = () => {
  let [foods, setFoods] = useContext(FoodContext)
  const search = window.location.search
  const params = new URLSearchParams(search)
  const slug = params.get("q")

  let data = foods.data
  let foodToEdit
  if (data) foodToEdit = data.filter((o) => o.id == slug)

  return (
    <div className="dashboard-content foods">
      <div className="main-content">
        <PageHeader>
          <Link to="/dashboard/food">Food /</Link> Edit
        </PageHeader>
        <div className="dashboard-foods new"></div>
      </div>
    </div>
  )
}

export default EditFood