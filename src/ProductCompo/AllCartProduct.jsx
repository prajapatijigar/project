import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Styles from "../css/cart.module.css";
import Cart from "./SmallCart";

const AllProduct = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('https://fakestoreapi.com/products/')
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
                img={product.image}
                title={product.title}
                content={product.description}
                rate={product.price}
              />
            ))
          ) : (
            <div className={Styles.loading}>No products available</div>
          )}
        </section>
      )}
    </div>
  );
};

export default AllProduct;
