import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import Button from "./AddBasketButton";
import IncreDecre from "./IncreDecre";
import Styles from "../css/DetailsCard.module.css";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const star = (rate) => {
    const arr = [];

    for (let i = 0; i < 5; i++) {
      if (rate >= i + 1) {
        arr.push(<FontAwesomeIcon icon={fasStar} key={i} />);
         console.log(rate);
      } else if (rate >= i) {
        arr.push(<FontAwesomeIcon icon={faStarHalfStroke} key={i} />);
      } else {
        arr.push(<FontAwesomeIcon icon={farStar} key={i} />);
      }
    }
    return arr;
  };

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
          <span>{star(product.rating.rate)}</span>
          <p>${product.price} <span>try</span></p>
          <div className={Styles.IncrementBtn}>
             <IncreDecre />
            <Button>add to basket</Button>
           </div>
          
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
