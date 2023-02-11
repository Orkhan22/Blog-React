import { wrap } from "lodash";
import React from "react";

const Card = (props) => {
  return (
    <div className="Card" >
      <img src={props.image} alt={props.title} style={{ width: "100%" }} />
      <h3>{props.title}</h3>
      <p>{props.info}</p>
    </div>
  );
};

const CardList = (props) => {
  return (
    
    <div className="miki" >
      <Card
        title={props.card1.title}
        info={props.card1.info}
        image={props.card1.image}
      />
      <Card
        title={props.card2.title}
        info={props.card2.info}
        image={props.card2.image}
      />
      <Card
        title={props.card3.title}
        info={props.card3.info}
        image={props.card3.image}
      />
      <Card
        title={props.card4.title}
        info={props.card3.info}
        image={props.card4.image}
      />
      <Card
        title={props.card5.title}
        info={props.card3.info}
        image={props.card5.image}
      />
    </div>
    
  );
};

export default CardList;