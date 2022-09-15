import React from 'react'
import Subtotal from './Subtotal'
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout__left">
            <div className="checkout__title">Food Basket</div>
            <p className="checkout__info">
                <small>$</small>
                <strong>(Amount) Subtotal, (Num) delicacies</strong>
            </p>

            <div className="checkout__basket">
              {basket.map(item => (
                <CheckoutProduct 
                  id = {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating}
                />
              ))}
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout