import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal, getFinalTotal } from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <div className="order_summary">Order Summary</div>
            <div className="lines">-----------------------------------------</div>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items) <strong>{value}</strong>
                            <div className="delivery">Delivery <strong>Free</strong></div>
                        </p>

                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                // total_value = {value * 2}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <div className="tax">Sales Tax (California) <strong>7.25%</strong></div>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Total <strong>{value}</strong>
                        </p>

                    </>
                )}
                decimalScale={2}
                value={getFinalTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <div className="lines">-----------------------------------------</div>
            <button>Initiate Checkout</button>
        </div>
    );
}

export default Subtotal