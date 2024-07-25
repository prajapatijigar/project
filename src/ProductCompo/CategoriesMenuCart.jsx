import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Styles from "../css/cart.module.css";
import SmallCart from "./SmallCart"; // Assuming SmallCart component is correctly imported
import { CartContext } from "./CartContext";

const CategoriesMenuCart = () => {
  const { slug } = useParams(); // Destructure the id from useParams
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {setSlugState} = useContext(CartContext)


  useEffect(() => {

    const fetchData = async () => {
      setSlugState(slug)
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${slug}`
        );
        setProducts(response.data);
      } catch (error) {
        setError("There was an error fetching the data!");
        console.error(error);
      }
    };
    fetchData();
  }, [setSlugState]);

  if (error) {
    return <div>{error}</div>;
  }
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={Styles.allproduct}>
      <section className={Styles.parentcart}>
        {products.length > 0 ? (
          products.map((product) => (
            <SmallCart
              key={product.id}
              id={product.id}
              img={product.image}
              title={product.title}
              rate={product.price}
              onHandler={() => handleProductClick(product.id)}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </div>
  );
};

export default CategoriesMenuCart;
