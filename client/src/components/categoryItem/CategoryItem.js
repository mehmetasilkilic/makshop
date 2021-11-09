import React from 'react'
import { Link } from 'react-router-dom'
import './categoryItem.scss'

const CategoryItem = props => {
    return (
        <div className="categoryItem">
            <Link to={`/products/${props.cat}`}>
                <div className="imgWrapper">
                    <img src={props.img} alt={props.title} />
                </div>
                <div className="info">
                    <h2 className="title">{props.title}</h2>
                    <button>SHOP NOW</button>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem
