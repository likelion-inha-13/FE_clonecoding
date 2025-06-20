import React from "react";
import Card from "./Card";
import "../styles/CardSection.css";

const CardSection = () => {
  const cards = [1,2,3,4,5,6,7,8,9]

  return (
    <section className="album">
      <div className="container-under">
        <div className="row">
          {cards.map((cardNum) => ( /*cardNum은 배열안의 값*/
            <div className="col" key={cardNum}>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;