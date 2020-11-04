import React from 'react';
import "./Product.css";

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div classNAme="product_rating">
                {Array(rating)
                    .fill()
                    .map((_,i) =>(
                        <h>⭐</h>
                    ))}
            </div>
            </div>
            <img src={image} alt=""/>
            <button> Add to Basket</button>
        </div>
    )
}

export default Product;
