
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import bg1 from "../../../image/bg-1.jpg";
import bg2 from "../../../image/bg-2.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="relative">
            <div className="absolute w-full h-full  text-center bg-[#11111173]">
              <h3 className="w-full text-[#FFF] relative top-[50%] md:w-[80%] mx-auto text-5xl font-semibold">CELEBRATE YOUR EVENTs  THAT
                LASTS LONGER
              </h3>
            </div>
            <img src={bg1} alt="" />
          </div>
          <div className="relative">
          <div className="absolute w-full h-full  text-center bg-[#11111173]">
              <h3 className="w-full text-[#FFF] relative top-[50%] md:w-[80%] mx-auto text-5xl font-semibold">CELEBRATE YOUR EVENTs  THAT
                LASTS LONGER
              </h3>
            </div>
            <img src={bg2} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
