import React, { useEffect, useState } from 'react';
import './cart.scss';
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Link } from 'react-router-dom'
import { removeProduct, addToCart, decreaseCart } from "../../redux/cartRedux"
import { userRequest } from "../../assets/utilities/requestMethods"
import { useHistory } from "react-router";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory()

    const onToken = token => { 
        setStripeToken(token);
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleDecreaseCart = (product) => {
         dispatch(decreaseCart(product));
     };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                history.push("/success", {
                    stripeData: res.data,
                    products: cart,
                });
            } catch { }
        };
        stripeToken && cart.total >= 1 && makeRequest();
    }, [stripeToken, cart.total, history, cart]);

    const handleRemoveProduct = (product) => {
        dispatch(removeProduct(product));
    };

    return (
        <div className="cart">
            <h1>YOUR BAG</h1>
            <div className="top">
                <Link to={`/products/jackets`}><button>CONTINUE SHOPPING</button></Link>
            </div>
            <div className="bottom">
                <div className="info">
                    {cart.products.map(product => (
                        <div className="cartProduct">
                            <div className="productDetail">
                                <img src={product.img} alt="" />
                                <div className="details">
                                    <span className="productName">
                                        <b>Product:</b> {product.title}
                                    </span>
                                    <span className="productId">
                                        <b>ID:</b> {product._id}
                                    </span>
                                    <span className="productSize">
                                        <b>Size:</b> {product.size}
                                    </span>
                                </div>
                            </div>
                            <div className="priceDetail">
                                <div className="productAmountContainer">
                                    <div className="counter" onClick={() => handleDecreaseCart(product)}>-</div>
                                    <div className="productAmount">{product.quantity}</div>
                                    <div className="counter" onClick={() => handleAddToCart(product)}>+</div>
                                </div>
                                <div className="productPrice">$ {product.price * product.quantity}</div>
                                <div className="remove" onClick={() => handleRemoveProduct(product)}>X</div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div className="summary">
                    <h2>ORDER SUMMARY</h2>
                    <div className="summaryItem">
                        <span>Subtotal</span>
                        <span>$ {cart.total}</span>
                    </div>
                    <div className="summaryItem">
                        <span>Estimated Shipping</span>
                        <span>$ 5.90</span>
                    </div>
                    <div className="summaryItem">
                        <span>Shipping Discount</span>
                        <span>$ -5.90</span>
                    </div>
                    <div className="summaryItem" type="total">
                        <span>Total</span>
                        <span>$ {cart.total}</span>
                    </div>
                    <StripeCheckout
                        name="Brand."
                        image="https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                        billingAddress
                        shippingAddress
                        description={`Your total is $ ${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <button>CHECKOUT NOW</button>
                    </StripeCheckout>
                </div>
            </div>
        </div>
    )
}

export default Cart
