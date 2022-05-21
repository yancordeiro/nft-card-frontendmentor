import React from "react";
import { card as StyledCard } from "./StyledCard";
import { ClockIcon, EthereumIcon, ViewIcon } from "../../assets/svg";
import image from "../../assets/img/image-avatar.png";
import Tilt from "react-parallax-tilt";

function Card() {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="8px"
    >
      <StyledCard>
        <div className="card__img">
          <div className="card__visible">
            <div className="card__visible-icon">
              <ViewIcon />
            </div>
          </div>
        </div>
        <div className="card__text-cont">
          <h3>Equilibrium #3429</h3>
          <p>Our Equilibrium collection promotes balance and calm</p>
        </div>
        <div className="card__info-row">
          <div className="card__info-box-left">
            <EthereumIcon />
            <span>0.041ETH</span>
          </div>
          <div className="card__info-box-right">
            <ClockIcon />
            <span>3 days left</span>
          </div>
        </div>
        <div className="card__footer">
          <div className="avatar">
            <img src={image} alt="Avatar Jules Wyvern" />
          </div>
          <p>
            Creating of <span>Jules Wyvern</span>
          </p>
        </div>
      </StyledCard>
    </Tilt>
  );
}

export default Card;
