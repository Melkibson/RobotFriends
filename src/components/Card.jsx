import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = ({ className, alt, name, email, id }) => {
  return (
    <>
      <div className={className}>
        <img alt={alt} src={`https://robohash.org/${id}?set=set3`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </>
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
