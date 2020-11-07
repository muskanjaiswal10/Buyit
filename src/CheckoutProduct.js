import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    console.log(id, title, image, price, rating);
    const removeFromBasket = ()=> {
        //remove from basket..
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    
    
    return (
        <div className ="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""/>
            <div className="checkoutProduct_info">
              <p className="checkoutProduct_title">{title}</p>
              <p className ="checkoutProduct_price">
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
              <button onClick ={removeFromBasket}>Remove From Basket</button> 
            </div>
            
        </div>
    );
}

export default CheckoutProduct;
