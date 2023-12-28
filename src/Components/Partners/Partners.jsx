import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Partners extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ],
    };
    return (
      <div className=" lg:max-w-6xl mx-auto my-16   ">
        <Slider {...settings}>
          <div className=" ">
            <img className=" h-36 " src="\images\Airtel_Tanzania-Logo.wine.png" alt="" />
          </div>
          <div className=" ">
            <img className=" h-36 " src="/images/COSTECH-1-300x281.jpg" />
          </div>
          <div className=" ">
            <img className=" h-36 " src="/images/tcra-logo.png" alt="" />
          </div>
          <div className=" ">
            <img className=" h-36 " src="\images\tigo.avif" alt="" />
          </div>
          
        </Slider>
      </div>
    );
  }
}