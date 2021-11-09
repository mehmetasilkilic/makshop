import React from 'react';
import './filterBar.scss'

const FilterBar = props => {
    return (
        <div className="filterBar">
            <div className="filter-result">{props.length} Products</div>
            <div className="filter-sort">
                Order
                <select value={props.sortItems} onChange={props.sortProducts}>
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter
                <select value={props.size} onChange={props.filterProducts}>
                    <option className="opt" value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
}

export default FilterBar
