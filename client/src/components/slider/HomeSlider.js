import React, { Component } from "react";
import Slider from "react-slick";
import sliderItems from '../../assets/JsonData/sliderItems.json'
import './homeSlider.scss'

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 7000,
      cssEase: "linear"
    };
    return (
      <div className="homeSlider">
        <Slider {...settings}>
          {sliderItems.map((item) => (
            <div className="slide">
              <div className="imgContainer">
                <div className="imgOverlay"></div>
                <img className="slideImg" src={item.image} alt="" />
              </div>
              <div className="infoContainer">
                <h2 className="title">{item.title}</h2>
                <p className="desc">{item.desc}</p>
                <button>SHOW NOW</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}