import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";
import {Col,Row} from 'react-bootstrap';

function Product({id, title, image, price, rating}) {
const [{basket},dispatch] = useStateValue();
const addToBasket = () => {
    alert("Item added to basket");
    //ADD item to basket
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
        },
    });
   

};

    return (
        <div className="product" >
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
            <button onClick={addToBasket}> Add to Basket</button>
        </div>
    )
}

export default Product;
