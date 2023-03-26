import React, { Children } from "react";
import Slider from "infinite-react-carousel";
import { cards } from "../../data";
import "./Slide.scss";

const Slide = ({children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {/* {
            cards.map(card =>(
              <CatCard item={card} key={card.id}/>
            ))
           } */}
           {children}
          {/* {cards.map((item) => {
            return <CatCard item={item} key={item.id} />;
          })} */}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
