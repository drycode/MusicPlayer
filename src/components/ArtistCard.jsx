import React from "react";

const artistCard = ({ albums, details, name }) => {
  console.log("Hello");
  return (
    <li className="artistCard" key={{ albums, details, name }}>
      <img src={details.thumb} className="img-thumbnail"></img>
      <div>{name}</div>
      <div>Album Count: info not available</div>
    </li>
  );
};

export default artistCard;
