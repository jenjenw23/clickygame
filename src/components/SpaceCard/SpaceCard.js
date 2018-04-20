import React from "react";
import "./SpaceCard.css";

const SpaceCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} value={props.id} onClick={()=> props.onClickHandler(props.id)}/>
    </div>
  </div> 
);

export default SpaceCard;
