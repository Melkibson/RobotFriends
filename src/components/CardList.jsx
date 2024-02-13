import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardArray = robots.map((user) => {
    return (
      <Card
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 max-w-20"
      />
    );
  });

  return <>{cardArray}</>;
};

export default CardList;
