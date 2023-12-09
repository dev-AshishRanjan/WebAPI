import React, { useState, useEffect } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

interface cards{
  name?:string,
  details?:string,
  cardtype?:string,
  route?:string
}

const Card = ({name,details,cardtype,route}:cards) => {
  return (
    <a href={route} className={cardtype}>
      <div className="cardInner">
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
      <div className="cardArrow">
        <FaArrowTurnUp />
      </div>
    </a>
  )
}

export default Card