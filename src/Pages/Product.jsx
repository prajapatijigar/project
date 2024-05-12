import React from 'react';
import Styles from "../css/Product.module.css"


const Product = () => {
    return (
        <>
            
            <header>
                <div className="container">
                    <div className="online-store">
                         <div>
                            <h2>online-store</h2>
                         </div>
                         <div className="shoping-categories">
                             <h4>
                                categories
                             </h4>
                             <i className="fa-solid fa-cart-plus"></i>
                         </div>
                    </div>
                </div>
            </header>
            <section className='all-products'>
                    
            </section>

        </>
    );
};

export default Product;