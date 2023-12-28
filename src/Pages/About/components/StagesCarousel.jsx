import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class StagesCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    };
    return (
      <div className=" mt-8 mx-5 ">
        <Slider {...settings}>
          <div className="rounded-md overflow-hidden relative">
            <img
              className="h-80"
              src="/images/office-1.jpg"
              alt="stage image"
            />

            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-dtbi-orange to-transparent p-4 text-white ">
              <p> 1: Pre-incubation: Partner with BUNI </p>

            </div>
          </div>

          <div className="rounded-md overflow-hidden relative">
            <img
              className="h-80"
              src="/images/office-2.jpg"
              alt="stage image"
            />

            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-500 to-transparent p-4 text-white ">
              <p> Legal Support </p>

            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              className="h-80"
              src="/images/office-2.jpg"
              alt="stage image"
            />

            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-500 to-transparent p-4 text-white ">
              <p> Shared Space & Services </p>

            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              className="h-80"
              src="/images/office-2.jpg"
              alt="stage image"
            />

            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-dtbi-orange to-transparent p-4 text-white ">
              <p> 2. Startup Stage </p>

            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              className="h-80"
              src="/images/office-2.jpg"
              alt="stage image"
            />

            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-500 to-transparent p-4 text-white ">
              <p> Training and Mentorship Programs </p>

            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              className="h-80"
              src="/images/office-2.jpg"
              alt="stage image"
            />

            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-500 to-transparent p-4 text-white ">
              <p> Financial MGT Progress </p>

            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              className="h-80"
              src="/images/office-2.jpg"
              alt="stage image"
            />

            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-dtbi-orange to-transparent p-4 text-white ">
              <p> 3. Company Stage </p>

            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              className="h-80"
              src="/images/office-2.jpg"
              alt="stage image"
            />

            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-500 to-transparent p-4 text-white ">
              <p> Networking </p>

            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              className="h-80"
              src="/images/office-2.jpg"
              alt="stage image"
            />

            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-500 to-transparent p-4 text-white ">
              <p> Market Linkages </p>

            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
