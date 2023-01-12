import React from "react";

export const Place: React.FC <any> = ({place}) => {
  return (
    <div className="place" key={place.name}>
      <img src={place.img} alt="" className="place__img"/>
      <p className="places__name">
        {place.name}
      </p>
    </div>
  )
}