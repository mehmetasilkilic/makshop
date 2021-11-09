import React, { useState, useEffect } from 'react';
import './products.scss';
import Product from '../product/Product';
import FilterBar from '../../components/filterBar/FilterBar';
import axios from "axios";

const Products = ({ cat }) => {

    const [products, setProducts] = useState([]);
    const [size, setSize] = useState('')
    const [sort, setSort] = useState('')

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    }, [cat]);

    const productNumber = item => {
        if (size === "") {
            return item
        } else if (item.availableSizes.includes(size)) {
            return item
        }
    }

    const orderProducts = (a, b) => (
        sort === "lowest"
            ? a.price > b.price
                ? 1
                : -1
            : sort === "highest"
                ? a.price < b.price
                    ? 1
                    : -1
                : a._id > b._id 
                    ? 1
                    : -1
    )

    return (
        <div className="products">
            <h2>All Products</h2>
            <hr />
            <FilterBar
                length={
                    products
                    .filter(productNumber)
                    .length}
                size={products.size}
                sort={products.sortItems}
                filterProducts={e => { setSize(e.target.value) }}
                sortProducts={e => { setSort(e.target.value) }}
            />
            <div className="products-wrapper">
                {
                    products
                        .slice()
                        .sort(orderProducts)
                        .filter(productNumber)
                        .map((item, id) => (
                            <div className="card-wrapper" key={id}>
                                <Product
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                    _id={item._id}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Products