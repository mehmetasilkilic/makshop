import React from 'react'
import './home.scss'
import HomeSlider from '../../components/slider/HomeSlider'
import Categories from '../../components/categories/Categories'
import Newsletter from '../../components/newsletter/Newsletter'

const Home = () => {
    return (
        <div className="home">
                <HomeSlider />
                <Categories />
                <Newsletter />
        </div>
    )
}

export default Home
