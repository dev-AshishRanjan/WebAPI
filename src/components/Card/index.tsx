import React, { useState, useEffect } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

interface cards{
  name?:String,
  details?:String,
  cardtype?:String,
  route?:String
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