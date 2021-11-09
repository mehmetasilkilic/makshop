import React from 'react'
import CategoryItem from '../categoryItem/CategoryItem'
import CategoriesData from '../../assets/JsonData/categoriesData.json'
import './categories.scss'

const Categories = () => {
    return (
        <div className="categories">
            {
                CategoriesData.map((item, index) => (
                    <div className="category" key={index}>
                        <CategoryItem
                            img={item.img}
                            title={item.title}
                            cat={item.cat}
                        />
                    </div>
                ))

            }
        </div>
    )
}

export default Categories
