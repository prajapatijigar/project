import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "../css/cart.module.css";
import Cart from "./SmallCart";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setError("There was an error fetching the data!");
        setLoading(false);
      });
  }, []);

  const handleProductClick = (id) => {
    // navigate(`/product/${id}`);
    navigate(`/product/${id}`)
  };

  return (
    <div className={Styles.allproduct}>
      <h2>All Products</h2>
      {loading ? (
        <div className={Styles.loading}>Loading...</div>
      ) : error ? (
        <div className={Styles.loading}>{error}</div>
      ) : (
        <section className={Styles.parentcart}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <Cart
                key={product.id}
                id={product.id}
                img={product.image}
                title={product.title}
                rate={product.price}
                onHandler={() => handleProductClick(product.id)}
              />
            ))
          ) : (
            <div className={Styles.loading}>No Products Available</div>
          )}
        </section>
      )}
    </div>
  );
};

export default AllProduct;
