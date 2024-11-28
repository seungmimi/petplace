import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentBox from "../common/ContentBox";

function NewContentSlide({ newState, setModalOpen }) {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-container">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {newState.map((e, i) => {
          return <ContentBox item={e} key={i} setModalOpen={setModalOpen} />;
        })}
      </Slider>
    </div>
  );
}
export default NewContentSlide;
