import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from "../components/Pizza";

const Homescreen = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { loading, pizzas, error } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <div>
      <h1>Pizza Menu</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error: {error.message}</h2>
      ) : (
        <div className="pizza-container">
          {pizzas.map((pizza) => (
            <Pizza key={pizza._id} pizza={pizza} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homescreen;
