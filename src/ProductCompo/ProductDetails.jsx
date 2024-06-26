import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "../css/DetailsCard.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
         console.log(response.data.rating.rate);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setError("There was an error fetching the data!");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className={Styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={Styles.detailscard}>
      <div className={Styles.firstpart}>
        <div className={Styles.detailsimg}>
        <img src={product.image} alt={product.title} className={Styles.productImage} />
        </div>
       <div className={Styles.detailscardtextbody}>
         <h1>{product.title}</h1>
         <span>{product.category}</span>
         <p>${product.price} <span>try</span></p>
       </div>
      </div>
      <div className={Styles.secondpart}>
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
