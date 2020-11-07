import React from 'react';
import {useStateValue} from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
              <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt=""
              />
             {basket?.length === 0 ? (
             <div>
                <h2> Your Shopping Basket is Empty.</h2>
             </div>) : (
             <div>
                <h2 className="checkout_title">Your Shopping Basket.</h2> 
                  {/*List out all of the checkout Products*/}
                  {basket?.map((item) =>(
                <CheckoutProduct 
                     id = {item.id}
                     title = {item.title}
                     image = {item.image}
                     price = {item.price}
                     rating = {item.rating} 
                />
                  ))}
                  
                </div>

                )}
            </div>
        </div>
    )
}

export default Checkout
