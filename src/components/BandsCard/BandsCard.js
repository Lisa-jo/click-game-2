import React from "react";
import "./BandsCard.css";

const BandsCard = props => (
  <div className="card">
    <div className="img-container">
      <a
        onClick={() => {
          console.log("selecting band... props are ...", props);
          props.selectBand(props.band);
        }}
        className={
          props.curScore === 0
            ? "style_prevu_kit style_prevu_kit_ex"
            : "style_prevu_kit"
        }
      >
        <img alt={props.id} src={props.image} />
      </a>
    </div>
  </div>
);

export default BandsCard;
