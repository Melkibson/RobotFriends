import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";


const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin: 0.5rem;
  transition: transform 0.2s ease-in-out;
  max-width: 300px;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &&:hover {
    transform: scale(1.05);
  }

  border-width: 2px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Assuming shadow-5 from Tailwind */
  max-width: 20rem; /* Assuming 20 units of maximum width from Tailwind */
`;

const CardRating = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const StarRating = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Soopafresh", sans-serif;
`;
const Card = ({ className, alt, name, email, id }) => {

  const [likes, setLikes] = useState(0);
  const handleLikeClick = () => {
    setLikes(likes + 1);
  };
  return (
    <CardContainer onClick={handleLikeClick}>
      <CardRating>
        <img src="/images/star.png" alt="Star" />
        <StarRating>{likes}</StarRating>
      </CardRating>
      <img alt={alt} src={`https://robohash.org/${id}?set=set3`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </CardContainer>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
