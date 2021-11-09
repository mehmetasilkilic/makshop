import React from 'react'
import { Link } from 'react-router-dom'
import formatCurrency from '../../assets/utilities/currency'
import './product.scss'

const Product = props => {

    return (
        <div className="product">
            <Link to={`/product/${props._id}`}>
                <div className="img-wrapper">
                    <img src={props.img} alt={props.title} />
                </div>
            </Link>
            <div className="wrapper">
                <Link to={`/product/${props._id}`}>
                    <div className="title-wrapper">
                        <h3>{props.title}</h3>
                    </div>
                </Link>
                <div className="price-wrapper">
                    <h4>{formatCurrency(props.price)}</h4>
                    <Link to={`/product/${props._id}`}>
                        <button className="button-primary">SHOP</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product
