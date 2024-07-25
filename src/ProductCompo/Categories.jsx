import React, { useEffect, useState } from "react";
import CategoriesCart from "./CategoriesCart";
import Styles2 from "../css/categories.module.css";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchinData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/categories`);
        setCategories(response.data);
      } catch (error) {
        setError("There was an error fetching the data!");
        console.error(error);
      }
    };
    fetchinData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className={Styles2.categories}>
      {categories.length > 0 ? (
        categories.map((item, index) => (
          <CategoriesCart data={item} key={index} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </ul>
  );
};

export default Categories;
