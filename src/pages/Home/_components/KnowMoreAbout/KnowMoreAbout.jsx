import React from "react";
import "./KnowMoreAbout.css";

import spicy1 from "../../../../assets/Images/Home/spicy1.png";
import spicy2 from "../../../../assets/Images/Home/spicy2.png";
import spicy3 from "../../../../assets/Images/Home/spicy3.png";
import spicy4 from "../../../../assets/Images/Home/spicy4.png";
import rightIcon from "../../../../assets/Images/Home/rightIcon.png";

import bowl from "../../../../assets/Images/Home/bowl.png";

const spices = [
  {
    img: spicy1,
    name: "History of the Spice Industry",
  },
  {
    img: spicy2,
    name: "India & it’s Spices",
  },
  {
    img: spicy3,
    name: "Future of the Spice Industry",
  },
  {
    img: spicy4,
    name: "Spice Harvest chart",
  },
];

const KnowMoreAbout = () => {
  return (
    <div className="moreAbout__container">
      <div className="moreAbout__inner">
        <img src={bowl} alt="" className="__absolute" />

        <div className="moreAbout__heading">
          Know more about our <span>spice</span> industry!
        </div>
        <div className="didYouKnow">
          <div className="didYouKnow__heading">Did you know ?</div>
          <div className="didYouKnow__info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            fringilla cursus urna non mollis. Praesent iaculis eleifend
            vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus fringilla cursus urna non mollis. Praesent iaculis eleifend
            vehicula. <span>Know more</span>
          </div>
        </div>

        <div className="allSpices">
          {spices.map((data, i) => {
            return (
              <div key={i} className="spicy1">
                <div className="spicy__left">
                  <img src={data.img} alt="" className="spicy__image" />
                  <div className="spicy__name">{data.name}</div>
                </div>
                <img src={rightIcon} alt="" className="right__icon" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KnowMoreAbout;
